export interface Run {
  id: string;
  date: string;
  type: string;
  route: string;
  distance_in_mi: number;
  duration: string;
  pace: string;
  average_speed_mph: number;
  calories_burned: number;
  climb_ft: number;
  average_heart_rate_bpm: string;
  friends_tagged: string;
  notes: string;
  gpx: string;
}
