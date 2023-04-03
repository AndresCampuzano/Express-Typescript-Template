import diaryData from './diaries.json';
import { DiaryEntry, NonSensitiveDiaryEntry } from '../types';
import { removeSensitiveData } from '../helpers/removeSensitiveData';

// Setting the type of the data from the JSON file
const diaryDataTyped: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

/**
 * Returns all diaries
 */
export const getEntries = (): DiaryEntry[] => {
  return diaryDataTyped;
};

/**
 * Returns a single diary entry
 * @param id
 */
export const getEntry = (id: number): NonSensitiveDiaryEntry | undefined => {
  const diary = diaryDataTyped.find((d) => d.id === id);
  if (diary) {
    return removeSensitiveData(diary);
  } else {
    return undefined;
  }
};

/**
 * Returns all diaries without sensitive data (comments)
 */
export const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaryDataTyped.map((diary: DiaryEntry) => {
    return removeSensitiveData(diary);
  });
};

/**
 * Adds a new diary entry
 */
export const addEntry = (): undefined => {
  return undefined;
};
