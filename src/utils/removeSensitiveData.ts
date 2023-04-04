import { DiaryEntry, NonSensitiveDiaryEntry } from '../types';

/**
 * Removes the comment from the diary entry
 * @param diary
 * @returns diary without comment
 */
export const removeSensitiveData = (
  diary: DiaryEntry
): NonSensitiveDiaryEntry => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { comment, ...diaryWithoutComment } = diary;
  return diaryWithoutComment;
};
