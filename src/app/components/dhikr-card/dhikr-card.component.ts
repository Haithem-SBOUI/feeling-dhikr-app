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
  
  ngOnInit() {
    const savedCount = localStorage.getItem(`dhikr-${this.dhikr.id}-count`);
    if (savedCount) {
      const count = parseInt(savedCount);
      this.currentCount.set(count);
      this.isCompleted.set(count >= this.dhikr.repetitions);
    }
  }
  
  async onCardClick() {
    if (this.isCompleted()) {
      await this.lightHaptic();
      return;
    }
    
    const newCount = this.currentCount() + 1;
    this.currentCount.set(newCount);
    localStorage.setItem(`dhikr-${this.dhikr.id}-count`, newCount.toString());
    await this.lightHaptic();
    
    if (newCount >= this.dhikr.repetitions) {
      this.isCompleted.set(true);
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
}
