import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { happyOutline, sadOutline } from 'ionicons/icons';
import { Feeling } from '../../models/feeling.model';
import feelingsData from '../../../assets/data/feelings.json';
import { currentLanguage } from '../../translations/language.store';

@Component({
  selector: 'app-feelings-list',
  imports: [IonCard, IonCardContent, IonIcon, IonGrid, IonRow, IonCol],
  templateUrl: './feelings-list.component.html',
  styleUrl: './feelings-list.component.css',
  standalone: true
})
export class FeelingsListComponent implements OnInit {
  feelings: Feeling[] = [];
  
  // Helper: get feeling name based on current language
  currLang = currentLanguage;
  constructor() {
    addIcons({ happyOutline, sadOutline });
  }

  ngOnInit() {
    this.feelings = feelingsData as Feeling[];
  }

  onFeelingSelect(feeling: Feeling) {
    console.log('Selected feeling:', feeling);
    // TODO: Navigate to dhikr list for this feeling
  }
}
