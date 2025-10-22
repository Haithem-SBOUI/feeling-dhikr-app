import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonSelect, IonSelectOption, IonToggle, IonListHeader } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ImpactStyle } from '@capacitor/haptics';
import { currentLanguage, setLanguage, appText } from '../../translations/language.store';
import { currentTheme, toggleTheme } from '../../theme/theme.store';
import { vibrationSettings, setVibrationOnCount, setVibrationOnComplete, setCountIntensity, setCompleteIntensity } from '../../services/vibration-settings.service';
import { Language } from '../../translations/translations';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.css'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonSelect, IonSelectOption, IonToggle, IonListHeader, FormsModule]
})
export class SettingsPage {
  appText = appText;
  lang = currentLanguage;
  theme = currentTheme;
  vibrationSettings = vibrationSettings;
  
  // Vibration intensity options
  ImpactStyle = ImpactStyle;

  constructor(private router: Router) {}

  // Change language
  onLanguageChange(event: any) {
    const newLang = event.detail.value as Language;
    setLanguage(newLang);
  }

  onThemeToggle() {
    toggleTheme();
  }
  
  // Vibration settings handlers
  onVibrationOnCountToggle(event: any) {
    setVibrationOnCount(event.detail.checked);
  }
  
  onVibrationOnCompleteToggle(event: any) {
    setVibrationOnComplete(event.detail.checked);
  }
  
  onCountIntensityChange(event: any) {
    setCountIntensity(event.detail.value);
  }
  
  onCompleteIntensityChange(event: any) {
    setCompleteIntensity(event.detail.value);
  }

  goToAbout() {
    this.router.navigate(['/about']);
  }

}
