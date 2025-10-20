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
  
  // Update document class for Ionic
  document.body.classList.toggle('dark', theme === 'dark');
}

export function loadSavedTheme() {
  const saved = localStorage.getItem('app_theme') as Theme;
  if (saved === 'dark' || saved === 'light') {
    setTheme(saved);
  }
}
