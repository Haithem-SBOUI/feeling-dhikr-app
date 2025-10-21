import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(private router: Router) {
    addIcons({ happyOutline, sadOutline });
  }

  ngOnInit() {
    this.feelings = feelingsData as Feeling[];
  }

  onFeelingSelect(feeling: Feeling) {
    this.router.navigate(['/dhikr-list', feeling.id]);
  }
}
