import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonCard, IonCardContent, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  happyOutline, 
  sadOutline,
  flameOutline,
  alertCircleOutline,
  timeOutline,
  shieldCheckmarkOutline,
  helpCircleOutline,
  heartOutline,
  cloudOutline,
  removeCircleOutline,
  giftOutline
} from 'ionicons/icons';
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
    addIcons({ 
      'happy-outline': happyOutline, 
      'sad-outline': sadOutline,
      'flame-outline': flameOutline,
      'alert-circle-outline': alertCircleOutline,
      'time-outline': timeOutline,
      'shield-checkmark-outline': shieldCheckmarkOutline,
      'help-circle-outline': helpCircleOutline,
      'heart-outline': heartOutline,
      'cloud-outline': cloudOutline,
      'remove-circle-outline': removeCircleOutline,
      'gift-outline': giftOutline
    });
  }

  ngOnInit() {
    this.feelings = feelingsData as Feeling[];
  }

  onFeelingSelect(feeling: Feeling) {
    this.router.navigate(['/dhikr-list', feeling.id]);
  }
}
