import { Component, Input } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonBadge } from '@ionic/angular/standalone';
import { Dhikr } from '../../models/feeling.model';
import { appText, currentLanguage } from '../../translations/language.store';

@Component({
  selector: 'app-dhikr-card',
  templateUrl: './dhikr-card.component.html',
  styleUrls: ['./dhikr-card.component.css'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonBadge]
})
export class DhikrCardComponent {
  @Input() dhikr!: Dhikr;
  
  appText = appText;
  lang = currentLanguage;
}
