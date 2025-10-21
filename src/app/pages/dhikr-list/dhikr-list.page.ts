import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { DhikrCardComponent } from '../../components/dhikr-card/dhikr-card.component';
import { Feeling } from '../../models/feeling.model';
import { appText, currentLanguage } from '../../translations/language.store';
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
    DhikrCardComponent
  ]
})
export class DhikrListPage implements OnInit {
  appText = appText;
  lang = currentLanguage;
  feeling?: Feeling;
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const feelingId = this.route.snapshot.paramMap.get('id');
    if (feelingId) {
      this.feeling = (feelingsData as Feeling[]).find(f => f.id === feelingId);
    }
  }

  getFeelingName(): string {
    if (!this.feeling) return '';
    return this.lang() === 'ar' ? this.feeling.nameAr : this.feeling.nameEn;
  }
}
