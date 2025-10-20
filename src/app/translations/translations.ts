// All application translations in one place
export const translations = {
  en: {
    // Home Page
    home: {
      title: 'Feeling Dhikr',
      question: 'How are you feeling today?'
    },
    // Settings Page
    settings: {
      title: 'Settings',
      language: 'Language',
      english: 'English',
      arabic: 'Arabic'
    },
    // Tabs
    tabs: {
      home: 'Home',
      settings: 'Settings'
    }
  },
  ar: {
    // Home Page
    home: {
      title: 'ذكر المشاعر',
      question: 'كيف تشعر اليوم؟'
    },
    // Settings Page
    settings: {
      title: 'الإعدادات',
      language: 'اللغة',
      english: 'الإنجليزية',
      arabic: 'العربية'
    },
    // Tabs
    tabs: {
      home: 'الرئيسية',
      settings: 'الإعدادات'
    }
  }
};

export type Language = 'en' | 'ar';
