import { signal } from '@angular/core';

export type Theme = 'light' | 'dark';

export const currentTheme = signal<Theme>('light');

export function toggleTheme() {
  const newTheme = currentTheme() === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
}

export function setTheme(theme: Theme) {
  currentTheme.set(theme);
  localStorage.setItem('app_theme', theme);
  
  // Update document classes for Ionic
  // Ionic v7 dark palette is applied via the 'ion-palette-dark' class
  const isDark = theme === 'dark';
  document.body.classList.toggle('ion-palette-dark', isDark);
  document.documentElement.classList.toggle('ion-palette-dark', isDark);

  // Legacy/custom support: keep toggling '.dark' for any custom selectors
  document.body.classList.toggle('dark', isDark);
}

export function loadSavedTheme() {
  const saved = localStorage.getItem('app_theme') as Theme;
  if (saved === 'dark' || saved === 'light') {
    setTheme(saved);
  }
}
