import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { currentLanguage, setLanguage, appText } from '../../translations/language.store';
import { Language } from '../../translations/translations';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.css'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonSelect, IonSelectOption, CommonModule, FormsModule]
})
export class SettingsPage {
  appText = appText;
  
  // Current language signal
  lang = currentLanguage;

  // Change language
  onLanguageChange(event: any) {
    const newLang = event.detail.value as Language;
    setLanguage(newLang);
  }
}
