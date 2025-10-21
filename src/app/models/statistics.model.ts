export interface DailyStats {
  date: string; // ISO date string (YYYY-MM-DD)
  totalDhikrs: number;
  completedDhikrs: number;
  feelingsExperienced: string[]; // feeling IDs
}

export interface DhikrCompletion {
  dhikrId: string;
  feelingId: string;
  timestamp: number;
  count: number;
}

export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string;
}

export interface UserStatistics {
  dailyStats: DailyStats[];
  completions: DhikrCompletion[];
  streak: StreakData;
  totalDhikrsCompleted: number;
  startDate: string; // When user first used the app
}
