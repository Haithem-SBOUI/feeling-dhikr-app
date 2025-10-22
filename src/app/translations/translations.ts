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
      vibration: 'Vibration',
      vibrationOnCount: 'Vibrate on Count',
      vibrationOnComplete: 'Vibrate on Complete',
      countIntensity: 'Count Vibration Intensity',
      completeIntensity: 'Complete Vibration Intensity',
      light: 'Light',
      medium: 'Medium',
      heavy: 'Heavy',
      about: 'About'
    },
    // Tabs
    tabs: {
      home: 'Home',
      statistics: 'Statistics',
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
      noData: 'No dhikr found for this feeling.',
      resetAll: 'Reset All'
    },
    // Statistics Page
    statistics: {
      title: 'Statistics',
      days: 'days',
      currentStreak: 'Current Streak',
      longest: 'Longest',
      totalDays: 'Total Days',
      today: 'Today',
      week: 'Week',
      month: 'Month',
      summary: 'Summary',
      dhikrsCompleted: 'Dhikrs Completed',
      sessionsCompleted: 'Sessions',
      feelingsExplored: 'Feelings',
      lifetime: 'Lifetime Stats',
      totalDhikrs: 'Total Dhikrs',
      topFeelings: 'Most Frequent Feelings',
      times: 'times',
      noData: 'Start completing dhikrs to see your statistics!'
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
      vibration: 'الاهتزاز',
      vibrationOnCount: 'اهتزاز عند العد',
      vibrationOnComplete: 'اهتزاز عند الإكمال',
      countIntensity: 'شدة اهتزاز العد',
      completeIntensity: 'شدة اهتزاز الإكمال',
      light: 'خفيف',
      medium: 'متوسط',
      heavy: 'قوي',
      about: 'حول التطبيق'
    },
    // Tabs
    tabs: {
      home: 'الرئيسية',
      statistics: 'الإحصائيات',
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
      noData: 'لا توجد أذكار لهذا الشعور.',
      resetAll: 'إعادة تعيين الكل'
    },
    // Statistics Page
    statistics: {
      title: 'الإحصائيات',
      days: 'أيام',
      currentStreak: 'السلسلة الحالية',
      longest: 'الأطول',
      totalDays: 'إجمالي الأيام',
      today: 'اليوم',
      week: 'الأسبوع',
      month: 'الشهر',
      summary: 'الملخص',
      dhikrsCompleted: 'الأذكار المكتملة',
      sessionsCompleted: 'الجلسات',
      feelingsExplored: 'المشاعر',
      lifetime: 'إحصائيات مدى الحياة',
      totalDhikrs: 'إجمالي الأذكار',
      topFeelings: 'المشاعر الأكثر تكرارًا',
      times: 'مرات',
      noData: 'ابدأ بإكمال الأذكار لترى إحصائياتك!'
    }
  }
};

export type Language = 'en' | 'ar';
