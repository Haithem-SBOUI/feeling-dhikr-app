import { signal, computed } from '@angular/core';
import { translations, Language } from './translations';

// Current language signal
export const currentLanguage = signal<Language>('en');

// The main variable that holds all text in current language
// This updates automatically when language changes!
export const appText = computed(() => translations[currentLanguage()]);

// Change language and update HTML direction
export function setLanguage(lang: Language) {
  currentLanguage.set(lang);
  localStorage.setItem('app_language', lang);
  
  // Update HTML direction for RTL/LTR
  const html = document.documentElement;
  if (lang === 'ar') {
    html.setAttribute('dir', 'rtl');
    html.setAttribute('lang', 'ar');
  } else {
    html.setAttribute('dir', 'ltr');
    html.setAttribute('lang', 'en');
  }
}

// Load saved language on app start
export function loadSavedLanguage() {
  const saved = localStorage.getItem('app_language') as Language;
  if (saved === 'ar' || saved === 'en') {
    setLanguage(saved);
  }
}
