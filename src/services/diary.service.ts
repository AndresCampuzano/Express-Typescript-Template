import { InsertOneResult, ObjectId, WithId } from 'mongodb';
import { removeSensitiveData } from '../utils/removeSensitiveData';
import { collections } from '../mongo/collections';
import { DiaryEntry, NonSensitiveDiaryEntry } from '../types';
import { uploadImage } from '../aws/uploadImage';

/**
 * Returns all diaries
 */
export const getEntries = async (): Promise<DiaryEntry[]> => {
  return (await collections.diariesCollection
    ?.find({})
    .toArray()) as WithId<DiaryEntry>[];
};

/**
 * Returns a single diary entry
 */
export const getEntry = async (
  id: string
): Promise<NonSensitiveDiaryEntry | undefined> => {
  const query = { _id: new ObjectId(id) };
  const diary = (await collections.diariesCollection?.findOne(
    query
  )) as WithId<DiaryEntry>;
  if (diary) {
    return removeSensitiveData(diary);
  } else {
    return undefined;
  }
};

/**
 * Returns all diaries without sensitive data (comments)
 */
export const getNonSensitiveEntries = async (): Promise<
  NonSensitiveDiaryEntry[]
> => {
  const diaryEntries = (await collections.diariesCollection
    ?.find({})
    .toArray()) as WithId<DiaryEntry>[];
  return diaryEntries.map((diary: DiaryEntry) => {
    return removeSensitiveData(diary);
  });
};

/**
 * Adds a new diary entry
 */
export const addEntry = async (
  body: DiaryEntry,
  file: Express.Multer.File | undefined
): Promise<InsertOneResult<DiaryEntry> | undefined> => {
  try {
    if (file) {
      const imageUrl = await uploadImage(file);
      return await collections.diariesCollection?.insertOne({
        ...body,
        avatar: imageUrl
      });
    } else {
      return await collections.diariesCollection?.insertOne(body);
    }
  } catch (error) {
    throw new Error('Error adding a new diary entry ' + error);
  }
};
