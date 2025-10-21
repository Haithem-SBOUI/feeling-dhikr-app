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
      arabic: 'Arabic',
      theme: 'Theme',
      darkMode: 'Dark Mode',
      about: 'About'
    },
    // Tabs
    tabs: {
      home: 'Home',
      settings: 'Settings'
    },
    // About Page
    about: {
      title: 'About',
      appName: 'Feeling Dhikr',
      version: 'Version',
      description: 'Your companion to remember Allah in every emotional state',
      purpose: 'Find peace through Quranic verses, authentic Hadiths, and meaningful Adhkar for every feeling.',
      contact: 'Email: contact@haithem-sboui.me',
      repo: 'GitHub Repository'
    },
    // Dhikr List Page
    dhikrList: {
      noData: 'No dhikr found for this feeling.'
    }
  },
  ar: {
    // Home Page
    home: {
      title: 'مشاعر وذكر ',
      question: 'كيف تشعر اليوم؟'
    },
    // Settings Page
    settings: {
      title: 'الإعدادات',
      language: 'اللغة',
      english: 'الإنجليزية',
      arabic: 'العربية',
      theme: 'المظهر',
      darkMode: 'الوضع الداكن',
      about: 'حول التطبيق'
    },
    // Tabs
    tabs: {
      home: 'الرئيسية',
      settings: 'الإعدادات'
    },
    // About Page
    about: {
      title: 'حول التطبيق',
      appName: 'مشاعر وذكر ',
      version: 'الإصدار',
      description: 'رفيقك لذكر الله في كل حالاتك',
      purpose: 'اعثر على الطمأنينة من خلال الآيات القرآنية والأحاديث النبوية الصحيحة والأذكار المناسبة في كل حالاتك ومشاعرك.',
      contact: 'البريد الالكتروني: contact@haithem-sboui.me',
      repo: 'مستودع GitHub'
    },
    // Dhikr List Page
    dhikrList: {
      noData: 'لا توجد أذكار لهذا الشعور.'
    }
  }
};

export type Language = 'en' | 'ar';
