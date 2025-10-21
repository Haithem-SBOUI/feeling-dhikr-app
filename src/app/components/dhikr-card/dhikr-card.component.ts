import { Component, Input, OnInit, Output, EventEmitter, signal } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonBadge, IonProgressBar, IonIcon } from '@ionic/angular/standalone';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { addIcons } from 'ionicons';
import { refreshOutline } from 'ionicons/icons';
import { Dhikr } from '../../models/feeling.model';
import { appText, currentLanguage } from '../../translations/language.store';
import { recordDhikrCompletion } from '../../services/statistics.service';

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
  
  currentCount = signal(0);
  isCompleted = signal(false);
  animateCounter = signal(false);
  
  private readonly EXPIRATION_TIME_MS = 60 * 60 * 1000; // 1 hour in milliseconds
  
  ngOnInit() {
    this.loadSavedProgress();
  }
  
  private loadSavedProgress() {
    const savedCount = localStorage.getItem(`dhikr-${this.dhikr.id}-count`);
    const savedTimestamp = localStorage.getItem(`dhikr-${this.dhikr.id}-timestamp`);
    const savedCompleted = localStorage.getItem(`dhikr-${this.dhikr.id}-completed`);
    
    if (!savedCount) {
      return;
    }
    
    const count = parseInt(savedCount);
    const isCompletedSaved = savedCompleted === 'true';
    
    // If completed, keep it forever (no expiration)
    if (isCompletedSaved && count >= this.dhikr.repetitions) {
      this.currentCount.set(count);
      this.isCompleted.set(true);
      return;
    }
    
    // If not completed, check if it's expired (older than 1 hour)
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
    this.isCompleted.set(false);
  }
  
  async onCardClick() {
    if (this.isCompleted()) {
      await this.lightHaptic();
      return;
    }
    
    const newCount = this.currentCount() + 1;
    this.currentCount.set(newCount);
    
    // Trigger counter animation - simple fade
    this.animateCounter.set(true);
    setTimeout(() => this.animateCounter.set(false), 200);
    
    // Save count and timestamp
    localStorage.setItem(`dhikr-${this.dhikr.id}-count`, newCount.toString());
    localStorage.setItem(`dhikr-${this.dhikr.id}-timestamp`, Date.now().toString());
    
    await this.lightHaptic();
    
    if (newCount >= this.dhikr.repetitions) {
      this.isCompleted.set(true);
      
      // Mark as completed (will not expire)
      localStorage.setItem(`dhikr-${this.dhikr.id}-completed`, 'true');
      
      await this.successHaptic();
      
      // Record completion in statistics
      recordDhikrCompletion(this.dhikr.id, this.feelingId, this.dhikr.repetitions);
      this.completed.emit();
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
    localStorage.removeItem(`dhikr-${this.dhikr.id}-completed`);
    this.reset.emit();
  }
  
  private async lightHaptic() {
    try {
      await Haptics.impact({ style: ImpactStyle.Light });
    } catch (error) {
      // Haptics not available (web browser)
      console.log('Haptics not available');
    }
  }
  
  private async successHaptic() {
    try {
      // Triple vibration for success
      await Haptics.impact({ style: ImpactStyle.Heavy });
      await new Promise(resolve => setTimeout(resolve, 100));
      await Haptics.impact({ style: ImpactStyle.Heavy });
      await new Promise(resolve => setTimeout(resolve, 100));
      await Haptics.impact({ style: ImpactStyle.Heavy });
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
