import { signal } from '@angular/core';
import { ImpactStyle } from '@capacitor/haptics';

export interface VibrationSettings {
  enableOnCount: boolean;
  enableOnComplete: boolean;
  countIntensity: ImpactStyle;
  completeIntensity: ImpactStyle;
}

const STORAGE_KEY = 'vibration-settings';

// Default settings
const defaultSettings: VibrationSettings = {
  enableOnCount: true,
  enableOnComplete: true,
  countIntensity: ImpactStyle.Light,
  completeIntensity: ImpactStyle.Heavy
};

// Load settings from localStorage
function loadSettings(): VibrationSettings {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return { ...defaultSettings, ...JSON.parse(stored) };
    } catch {
      return defaultSettings;
    }
  }
  return defaultSettings;
}

// Save settings to localStorage
function saveSettings(settings: VibrationSettings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

// Settings signal
export const vibrationSettings = signal<VibrationSettings>(loadSettings());

// Update individual settings
export function setVibrationOnCount(enabled: boolean) {
  const current = vibrationSettings();
  const updated = { ...current, enableOnCount: enabled };
  vibrationSettings.set(updated);
  saveSettings(updated);
}

export function setVibrationOnComplete(enabled: boolean) {
  const current = vibrationSettings();
  const updated = { ...current, enableOnComplete: enabled };
  vibrationSettings.set(updated);
  saveSettings(updated);
}

export function setCountIntensity(intensity: ImpactStyle) {
  const current = vibrationSettings();
  const updated = { ...current, countIntensity: intensity };
  vibrationSettings.set(updated);
  saveSettings(updated);
}

export function setCompleteIntensity(intensity: ImpactStyle) {
  const current = vibrationSettings();
  const updated = { ...current, completeIntensity: intensity };
  vibrationSettings.set(updated);
  saveSettings(updated);
}

// Helper to get intensity label
export function getIntensityLabel(intensity: ImpactStyle, lang: 'en' | 'ar'): string {
  const labels = {
    [ImpactStyle.Light]: { en: 'Light', ar: 'خفيف' },
    [ImpactStyle.Medium]: { en: 'Medium', ar: 'متوسط' },
    [ImpactStyle.Heavy]: { en: 'Heavy', ar: 'قوي' }
  };
  return labels[intensity][lang];
}
