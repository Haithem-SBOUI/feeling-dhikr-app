import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { refreshOutline } from 'ionicons/icons';
import { DhikrCardComponent } from '../../components/dhikr-card/dhikr-card.component';
import { Feeling } from '../../models/feeling.model';
import { appText, currentLanguage } from '../../translations/language.store';
import { trackFeelingVisit } from '../../services/statistics.service';
import feelingsData from '../../../assets/data/feelings.json';

@Component({
  selector: 'app-dhikr-list',
  templateUrl: './dhikr-list.page.html',
  styleUrls: ['./dhikr-list.page.css'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonBackButton, 
    IonButtons,
    IonButton,
    IonIcon,
    DhikrCardComponent
  ]
})
export class DhikrListPage implements OnInit {
  @ViewChildren(DhikrCardComponent) dhikrCards!: QueryList<DhikrCardComponent>;
  
  appText = appText;
  lang = currentLanguage;
  feeling?: Feeling;
  
  constructor(private route: ActivatedRoute) {
    addIcons({ refreshOutline });
  }

  ngOnInit() {
    const feelingId = this.route.snapshot.paramMap.get('id');
    if (feelingId) {
      this.feeling = (feelingsData as Feeling[]).find(f => f.id === feelingId);
      
      // Track that user visited this feeling
      trackFeelingVisit(feelingId);
    }
  }

  getFeelingName(): string {
    if (!this.feeling) return '';
    return this.lang() === 'ar' ? this.feeling.nameAr : this.feeling.nameEn;
  }
  
  resetAllDhikrs() {
    // Reset all dhikr cards
    this.dhikrCards.forEach(card => {
      card.resetCounter();
    });
  }
}
