import { Component, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonBadge,
  IonIcon,
  IonSegment,
  IonSegmentButton
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { flameOutline, trophyOutline, statsChartOutline, heartOutline } from 'ionicons/icons';
import { appText, currentLanguage } from '../../translations/language.store';
import { 
  userStatistics, 
  getTodayStats, 
  getWeeklyStats, 
  getMonthlyStats,
  getMostFrequentFeelings 
} from '../../services/statistics.service';
import feelingsData from '../../../assets/data/feelings.json';
import { Feeling } from '../../models/feeling.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.css'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonBadge,
    IonIcon,
    IonSegment,
    IonSegmentButton
  ]
})
export class StatisticsPage implements OnInit {
  appText = appText;
  lang = currentLanguage;
  stats = userStatistics;
  
  selectedPeriod: 'today' | 'week' | 'month' = 'today';
  
  todayStats = computed(() => getTodayStats());
  weeklyStats = computed(() => getWeeklyStats());
  monthlyStats = computed(() => getMonthlyStats());
  topFeelings = computed(() => getMostFrequentFeelings(5));
  
  constructor() {
    addIcons({ flameOutline, trophyOutline, statsChartOutline, heartOutline });
  }
  
  ngOnInit() {}
  
  onPeriodChange(event: any) {
    this.selectedPeriod = event.detail.value;
  }
  
  getPeriodStats() {
    switch (this.selectedPeriod) {
      case 'today':
        return this.todayStats();
      case 'week':
        return this.getWeeklyTotals();
      case 'month':
        return this.getMonthlyTotals();
    }
  }
  
  getWeeklyTotals() {
    const weekly = this.weeklyStats();
    const allFeelings: string[] = [];
    weekly.forEach(day => {
      allFeelings.push(...day.feelingsExperienced);
    });
    
    return {
      totalDhikrs: weekly.reduce((sum, day) => sum + day.totalDhikrs, 0),
      completedDhikrs: weekly.reduce((sum, day) => sum + day.completedDhikrs, 0),
      feelingsExperienced: [...new Set(allFeelings)]
    };
  }
  
  getMonthlyTotals() {
    const monthly = this.monthlyStats();
    const allFeelings: string[] = [];
    monthly.forEach(day => {
      allFeelings.push(...day.feelingsExperienced);
    });
    
    return {
      totalDhikrs: monthly.reduce((sum, day) => sum + day.totalDhikrs, 0),
      completedDhikrs: monthly.reduce((sum, day) => sum + day.completedDhikrs, 0),
      feelingsExperienced: [...new Set(allFeelings)]
    };
  }
  
  getFeelingName(feelingId: string): string {
    const feeling = (feelingsData as Feeling[]).find(f => f.id === feelingId);
    if (!feeling) return feelingId;
    return this.lang() === 'ar' ? feeling.nameAr : feeling.nameEn;
  }
  
  getDaysSinceStart(): number {
    const startDate = new Date(this.stats().startDate);
    const today = new Date();
    const diffTime = today.getTime() - startDate.getTime();
    return Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
  }
  
  getStreakEmoji(): string {
    const streak = this.stats().streak.currentStreak;
    if (streak >= 30) return '🔥🔥🔥';
    if (streak >= 14) return '🔥🔥';
    if (streak >= 7) return '🔥';
    if (streak >= 3) return '⭐';
    return '✨';
  }
}
