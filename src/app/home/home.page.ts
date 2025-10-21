import { Component, computed } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { FeelingsListComponent } from '../components/feelings-list/feelings-list.component';
import { appText, currentLanguage } from '../translations/language.store';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.css'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, FeelingsListComponent],
})
export class HomePage {
  appText = appText;
  lang = currentLanguage;

  // Time-based greeting
  greeting = computed(() => {
    const hour = new Date().getHours();
    const isArabic = this.lang() === 'ar';
    
    if (hour >= 2 && hour < 12) {
      return isArabic ? 'صباح الخير' : 'Good Morning';
    } else {
      return isArabic ? 'مساء الخير' : 'Good Afternoon';
    }
  });

  constructor() {}
}

