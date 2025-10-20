import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { loadSavedLanguage } from './translations/language.store';
import { loadSavedTheme } from './theme/theme.store';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    loadSavedLanguage();
    loadSavedTheme();
  }
}
