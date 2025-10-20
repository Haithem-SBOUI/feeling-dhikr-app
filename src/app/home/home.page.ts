import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { FeelingsListComponent } from '../components/feelings-list/feelings-list.component';
import { appText } from '../translations/language.store';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.css'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, FeelingsListComponent],
})
export class HomePage {
  appText = appText;

  constructor() {}
}

