import { signal } from '@angular/core';
import { UserStatistics, DailyStats, DhikrCompletion, StreakData } from '../models/statistics.model';

const STORAGE_KEY = 'app_statistics';

// Initialize statistics signal
export const userStatistics = signal<UserStatistics>(loadStatistics());

function loadStatistics(): UserStatistics {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  
  // Default statistics
  return {
    dailyStats: [],
    completions: [],
    streak: {
      currentStreak: 0,
      longestStreak: 0,
      lastActiveDate: ''
    },
    totalDhikrsCompleted: 0,
    startDate: getTodayDate()
  };
}

function saveStatistics(stats: UserStatistics) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  userStatistics.set(stats);
}

function getTodayDate(): string {
  return new Date().toISOString().split('T')[0];
}

export function recordDhikrCompletion(dhikrId: string, feelingId: string, count: number) {
  const stats = { ...userStatistics() };
  const today = getTodayDate();
  
  // Add completion record
  const completion: DhikrCompletion = {
    dhikrId,
    feelingId,
    timestamp: Date.now(),
    count
  };
  stats.completions.push(completion);
  console.log(stats)
  
  // Update total
  stats.totalDhikrsCompleted += count;
  
  // Update or create daily stats
  let dailyStat = stats.dailyStats.find(d => d.date === today);
  if (!dailyStat) {
    dailyStat = {
      date: today,
      totalDhikrs: 0,
      completedDhikrs: 0,
      feelingsExperienced: []
    };
    stats.dailyStats.push(dailyStat);
  }
  
  dailyStat.totalDhikrs += count;
  dailyStat.completedDhikrs += 1;
  
  if (!dailyStat.feelingsExperienced.includes(feelingId)) {
    dailyStat.feelingsExperienced.push(feelingId);
  }
  
  // Update streak
  updateStreak(stats, today);
  
  // Keep only last 90 days of stats
  stats.dailyStats = stats.dailyStats
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 90);
  
  saveStatistics(stats);
}

export function trackFeelingVisit(feelingId: string) {
  const stats = { ...userStatistics() };
  const today = getTodayDate();
  
  let dailyStat = stats.dailyStats.find(d => d.date === today);
  if (!dailyStat) {
    dailyStat = {
      date: today,
      totalDhikrs: 0,
      completedDhikrs: 0,
      feelingsExperienced: []
    };
    stats.dailyStats.push(dailyStat);
  }
  
  if (!dailyStat.feelingsExperienced.includes(feelingId)) {
    dailyStat.feelingsExperienced.push(feelingId);
    saveStatistics(stats);
  }
}

function updateStreak(stats: UserStatistics, today: string) {
  const lastActive = stats.streak.lastActiveDate;
  
  if (!lastActive) {
    // First time using the app
    stats.streak.currentStreak = 1;
    stats.streak.longestStreak = 1;
    stats.streak.lastActiveDate = today;
    return;
  }
  
  const lastDate = new Date(lastActive);
  const currentDate = new Date(today);
  const diffTime = currentDate.getTime() - lastDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) {
    // Same day, no change
    return;
  } else if (diffDays === 1) {
    // Consecutive day
    stats.streak.currentStreak += 1;
    if (stats.streak.currentStreak > stats.streak.longestStreak) {
      stats.streak.longestStreak = stats.streak.currentStreak;
    }
  } else {
    // Streak broken
    stats.streak.currentStreak = 1;
  }
  
  stats.streak.lastActiveDate = today;
}

export function getTodayStats(): DailyStats | undefined {
  const today = getTodayDate();
  return userStatistics().dailyStats.find(d => d.date === today);
}

export function getWeeklyStats(): DailyStats[] {
  const stats = userStatistics().dailyStats;
  const today = new Date();
  const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  const weekAgoStr = weekAgo.toISOString().split('T')[0];
  
  return stats.filter(d => d.date >= weekAgoStr).sort((a, b) => a.date.localeCompare(b.date));
}

export function getMonthlyStats(): DailyStats[] {
  const stats = userStatistics().dailyStats;
  const today = new Date();
  const monthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
  const monthAgoStr = monthAgo.toISOString().split('T')[0];
  
  return stats.filter(d => d.date >= monthAgoStr).sort((a, b) => a.date.localeCompare(b.date));
}

export function getMostFrequentFeelings(limit: number = 5): { feelingId: string; count: number }[] {
  const stats = userStatistics().dailyStats;
  const feelingCounts = new Map<string, number>();
  
  stats.forEach(day => {
    day.feelingsExperienced.forEach(feeling => {
      feelingCounts.set(feeling, (feelingCounts.get(feeling) || 0) + 1);
    });
  });
  
  return Array.from(feelingCounts.entries())
    .map(([feelingId, count]) => ({ feelingId, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

export function resetStatistics() {
  const defaultStats: UserStatistics = {
    dailyStats: [],
    completions: [],
    streak: {
      currentStreak: 0,
      longestStreak: 0,
      lastActiveDate: ''
    },
    totalDhikrsCompleted: 0,
    startDate: getTodayDate()
  };
  saveStatistics(defaultStats);
}
