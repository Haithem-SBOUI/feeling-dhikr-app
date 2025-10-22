import { Component, Input, OnInit, Output, EventEmitter, signal } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonBadge, IonProgressBar, IonIcon } from '@ionic/angular/standalone';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { addIcons } from 'ionicons';
import { refreshOutline } from 'ionicons/icons';
import { Dhikr } from '../../models/feeling.model';
import { appText, currentLanguage } from '../../translations/language.store';
import { recordDhikrCompletion } from '../../services/statistics.service';
import { vibrationSettings } from '../../services/vibration-settings.service';

@Component({
  selector: 'app-dhikr-card',
  templateUrl: './dhikr-card.component.html',
  styleUrls: ['./dhikr-card.component.css'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonBadge, IonProgressBar, IonIcon]
})
export class DhikrCardComponent implements OnInit {
  @Input() dhikr!: Dhikr;
  @Input() feelingId!: string;
  @Output() reset = new EventEmitter<void>();
  @Output() completed = new EventEmitter<void>();
  
  constructor() {
    addIcons({ refreshOutline });
  }
  
  appText = appText;
  lang = currentLanguage;
  vibrationSettings = vibrationSettings;
  
  currentCount = signal(0);
  isCompleted = signal(false);
  animateCounter = signal(false);
  completionCount = signal(0); // Track how many times completed in the last hour
  
  private readonly EXPIRATION_TIME_MS = 60 * 60 * 1000; // 1 hour in milliseconds
  
  ngOnInit() {
    this.loadSavedProgress();
  }
  
  private loadSavedProgress() {
    const savedCount = localStorage.getItem(`dhikr-${this.dhikr.id}-count`);
    const savedTimestamp = localStorage.getItem(`dhikr-${this.dhikr.id}-timestamp`);
    const savedCompletionCount = localStorage.getItem(`dhikr-${this.dhikr.id}-completionCount`);
    const savedCompletionTimestamp = localStorage.getItem(`dhikr-${this.dhikr.id}-completionTimestamp`);
    
    // Load completion count if still valid (within 1 hour)
    if (savedCompletionCount && savedCompletionTimestamp) {
      const completionTimestamp = parseInt(savedCompletionTimestamp);
      const now = Date.now();
      const elapsedTime = now - completionTimestamp;
      
      if (elapsedTime <= this.EXPIRATION_TIME_MS) {
        // Still valid - load the completion count
        this.completionCount.set(parseInt(savedCompletionCount));
      } else {
        // Expired - clear completion count
        this.clearCompletionCount();
      }
    }
    
    if (!savedCount) {
      return;
    }
    
    const count = parseInt(savedCount);
    
    // Check if current progress is expired (older than 1 hour)
    if (savedTimestamp) {
      const timestamp = parseInt(savedTimestamp);
      const now = Date.now();
      const elapsedTime = now - timestamp;
      
      if (elapsedTime > this.EXPIRATION_TIME_MS) {
        // Expired - reset the counter
        this.resetCounter();
        return;
      }
    }
    
    // Still valid - load the saved progress
    this.currentCount.set(count);
  }
  
  async onCardClick() {
    // Don't allow clicks if already completed (until reset)
    if (this.isCompleted()) {
      await this.lightHaptic();
      return;
    }
    
    const newCount = this.currentCount() + 1;
    this.currentCount.set(newCount);
    
    // Trigger counter animation
    this.animateCounter.set(true);
    setTimeout(() => this.animateCounter.set(false), 200);
    
    // Save count and timestamp
    localStorage.setItem(`dhikr-${this.dhikr.id}-count`, newCount.toString());
    localStorage.setItem(`dhikr-${this.dhikr.id}-timestamp`, Date.now().toString());
    
    // Check if completed
    if (newCount == this.dhikr.repetitions) {
      // Mark as completed
      this.isCompleted.set(true);
      
      // Success haptic feedback
      await this.successHaptic();
      
      // Increment completion count
      const newCompletionCount = this.completionCount() + 1;
      this.completionCount.set(newCompletionCount);
      
      // Save completion count and timestamp
      localStorage.setItem(`dhikr-${this.dhikr.id}-completionCount`, newCompletionCount.toString());
      localStorage.setItem(`dhikr-${this.dhikr.id}-completionTimestamp`, Date.now().toString());
      
      // Record completion in statistics
      recordDhikrCompletion(this.dhikr.id, this.feelingId, this.dhikr.repetitions);
      this.completed.emit();
      
      // Reset counter after a short delay to show completion animation
      setTimeout(() => {
        this.currentCount.set(0);
        this.isCompleted.set(false);
        localStorage.setItem(`dhikr-${this.dhikr.id}-count`, '0');
      }, 700);
    } else {
      await this.lightHaptic();
    }
  }
  
  async onResetClick(event: Event) {
    // Prevent card click when clicking reset button
    event.stopPropagation();
    this.resetCounter();
    await this.lightHaptic();
  }
  
  resetCounter() {
    this.currentCount.set(0);
    this.isCompleted.set(false);
    localStorage.setItem(`dhikr-${this.dhikr.id}-count`, '0');
    localStorage.removeItem(`dhikr-${this.dhikr.id}-timestamp`);
    this.reset.emit();
  }
  
  private clearCompletionCount() {
    this.completionCount.set(0);
    localStorage.removeItem(`dhikr-${this.dhikr.id}-completionCount`);
    localStorage.removeItem(`dhikr-${this.dhikr.id}-completionTimestamp`);
  }
  
  private async lightHaptic() {
    const settings = this.vibrationSettings();
    if (!settings.enableOnCount) {
      return; // Vibration disabled for counting
    }
    
    try {
      await Haptics.impact({ style: settings.countIntensity });
    } catch (error) {
      // Haptics not available (web browser)
      console.log('Haptics not available');
    }
  }
  
  private async successHaptic() {
    const settings = this.vibrationSettings();
    if (!settings.enableOnComplete) {
      return; // Vibration disabled for completion
    }
    
    try {
      // Triple vibration for success with configured intensity
      await Haptics.impact({ style: settings.completeIntensity });
      await new Promise(resolve => setTimeout(resolve, 100));
      await Haptics.impact({ style: settings.completeIntensity });
      await new Promise(resolve => setTimeout(resolve, 100));
      await Haptics.impact({ style: settings.completeIntensity });
    } catch (error) {
      console.log('Haptics not available');
    }
  }
  
  getProgress(): number {
    return this.dhikr.repetitions > 0 ? this.currentCount() / this.dhikr.repetitions : 0;
  }
  
  shouldAnimateCounter(): boolean {
    return this.animateCounter();
  }
}
