type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy';
type Visibility = 'great' | 'good' | 'ok' | 'poor';

export interface DiaryEntry {
  id: string;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
  avatar?: string;
}

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;
