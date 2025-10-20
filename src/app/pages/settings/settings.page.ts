import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonSelect, IonSelectOption, IonToggle } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { currentLanguage, setLanguage, appText } from '../../translations/language.store';
import { currentTheme, toggleTheme } from '../../theme/theme.store';
import { Language } from '../../translations/translations';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.css'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonSelect, IonSelectOption, IonToggle, FormsModule]
})
export class SettingsPage {
  appText = appText;
  lang = currentLanguage;
  theme = currentTheme;

  constructor(private router: Router) {}

  // Change language
  onLanguageChange(event: any) {
    const newLang = event.detail.value as Language;
    setLanguage(newLang);
  }

  onThemeToggle() {
    toggleTheme();
  }

  goToAbout() {
    this.router.navigate(['/about']);
  }

}
