# تطبيق ذكر المشاعر | Feeling Dhikr App

<div align="center">

[![Android](https://img.shields.io/badge/Platform-Android-green.svg)](https://www.android.com/)
[![Ionic](https://img.shields.io/badge/Framework-Ionic-blue.svg)](https://ionicframework.com/)
[![Angular](https://img.shields.io/badge/Framework-Angular%2017-red.svg)](https://angular.io/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**[العربية](#العربية) | [English](#english)**

</div>

---

<a name="العربية"></a>
## 📖 العربية

### 🌟 نظرة عامة

تطبيق ذكر المشاعر هو تطبيق أندرويد مبتكر يربط بين مشاعرك اليومية والأذكار والأدعية الإسلامية المناسبة. التطبيق يساعدك على التعامل مع مشاعرك من خلال التذكير بالله والذكر المستمر.

### 💡 فكرة المشروع

الفكرة الأساسية هي تقديم تطبيق يسمح للمستخدم باختيار شعوره الحالي (سعيد، حزين، قلق، ممتن، إلخ)، ومن ثم يعرض له مجموعة من الأذكار والأدعية المناسبة لهذا الشعور من القرآن والسنة. كل ذكر يأتي مع عداد للتكرار، وتتبع للتقدم، وإحصائيات يومية.

### ✨ المميزات الحالية

- 📱 **11 شعور مختلف** - سعيد، حزين، غاضب، قلق، ملل، واثق، محتار، راض، مكتئب، شاك، شاكر
- 📿 **60+ ذكر وآية** - من القرآن الكريم والأحاديث النبوية الصحيحة
- 🎯 **عداد ذكي** - تتبع التقدم مع عداد تلقائي وإشعار اهتزازي عند الإتمام
- ✅ **تتبع الإنجازات** - يظهر عدد المرات التي أكملت فيها الذكر (×1، ×2، ×3...)
- ⏱️ **نظام ذكي للانتهاء** - يتم تصفير العداد تلقائياً بعد ساعة واحدة
- 📊 **إحصائيات مفصلة** - تتبع يومي، أسبوعي، وشهري لتقدمك
- 🔥 **نظام المتابعة المستمرة** - حافظ على سلسلة أيامك المتتالية
- 🌓 **الوضع الداكن** - دعم كامل للوضع الليلي
- 🌍 **ثنائي اللغة** - دعم كامل للعربية والإنجليزية
- 🎨 **تصميم جميل** - واجهة مستخدم حديثة وسهلة الاستخدام
- 📳 **ردود فعل لمسية** - اهتزاز عند كل نقرة وعند إكمال الذكر

### 🛠️ التقنيات المستخدمة

#### Frontend
- **Ionic Framework 7** - إطار العمل للتطبيقات الهجينة
- **Angular 17+** - إطار عمل جافاسكربت مع Signals وStandalone Components
- **TypeScript** - لغة البرمجة مع أنواع ثابتة
- **Capacitor** - لربط تطبيق الويب مع المميزات الأصلية للأندرويد

#### Mobile
- **Android SDK** - تطوير تطبيقات الأندرويد
- **Capacitor Plugins**:
  - `@capacitor/haptics` - الاهتزاز اللمسي
  - `@capacitor/status-bar` - تخصيص شريط الحالة
  - `@capacitor/keyboard` - التحكم في لوحة المفاتيح
  - `@capacitor/app` - دورة حياة التطبيق

#### Styling
- **CSS3** - تنسيقات متقدمة مع animations
- **Ionic Components** - مكونات UI جاهزة
- **Custom Animations** - رسوم متحركة مخصصة للعداد والإنجازات

#### Data Storage
- **LocalStorage** - تخزين محلي للبيانات والتقدم
- **JSON** - تنسيق البيانات للأذكار والمشاعر

### 📁 هيكل المشروع

```
feeling-dhikr-app/
├── src/
│   ├── app/
│   │   ├── components/           # المكونات القابلة لإعادة الاستخدام
│   │   │   ├── dhikr-card/      # بطاقة الذكر مع العداد
│   │   │   └── feelings-list/    # قائمة المشاعر
│   │   ├── pages/                # صفحات التطبيق
│   │   │   ├── dhikr-list/      # قائمة الأذكار لشعور معين
│   │   │   ├── statistics/       # صفحة الإحصائيات
│   │   │   ├── settings/         # الإعدادات
│   │   │   └── about/            # عن التطبيق
│   │   ├── home/                 # الصفحة الرئيسية
│   │   ├── models/               # نماذج البيانات TypeScript
│   │   ├── services/             # الخدمات (الإحصائيات، البيانات)
│   │   └── translations/         # الترجمات (عربي/إنجليزي)
│   ├── assets/
│   │   └── data/
│   │       └── feelings.json     # بيانات المشاعر والأذكار
│   ├── theme/                    # ملفات السمات
│   └── global.css                # تنسيقات عامة
├── android/                      # مشروع الأندرويد
└── capacitor.config.ts           # إعدادات Capacitor
```

### 🚀 الخطوات القادمة

#### المرحلة الأولى: توسيع المحتوى
- [ ] **إضافة المزيد من المشاعر**
  - إضافة 20-30 شعور إضافي
  - تصنيفات أكثر تفصيلاً للمشاعر
  
- [ ] **نظام التصنيفات الفرعية**
  - إضافة فئات رئيسية (مشاكل، مال، علاقات، صحة، عمل)
  - تحت كل فئة: مشاعر فرعية محددة
  - مثال: 
    ```
    المشاكل
    ├── مشاكل مالية
    ├── مشاكل عائلية
    ├── مشاكل صحية
    └── مشاكل عملية
    ```
  - عند النقر على الشعور:
    - في الأعلى: قائمة المشاعر الفرعية
    - في الأسفل: الأذكار العامة للفئة
    - إمكانية التمرير لعرض أذكار أخرى

- [ ] **توسيع قاعدة الأذكار**
  - إضافة 200+ ذكر ودعاء
  - تصنيف الأذكار حسب الموضوع والشدة

#### المرحلة الثانية: تسجيل الدخول والمزامنة
- [ ] **تسجيل الدخول عبر Google**
  - تكامل مع Google Sign-In
  - حفظ بيانات المستخدم في السحابة
  
- [ ] **مزامنة البيانات**
  - مزامنة التقدم والإنجازات عبر الأجهزة
  - نسخ احتياطي تلقائي للبيانات
  - استعادة البيانات عند تسجيل الدخول من جهاز جديد

#### المرحلة الثالثة: الأذكار المخصصة
- [ ] **أذكار شخصية**
  - السماح للمستخدم بإضافة أذكار خاصة
  - إمكانية تعديل وحذف الأذكار المخصصة
  - تخصيص عدد التكرارات لكل ذكر
  - ربط الأذكار المخصصة بمشاعر محددة

#### المرحلة الرابعة: المراجع التعليمية
- [ ] **مكتبة الكتب**
  - إضافة مراجع لكتب إسلامية موثوقة
  - ربط كل شعور بكتب ذات صلة
  - عرض مقتطفات من الكتب
  
- [ ] **مقاطع الفيديو**
  - فيديوهات لعلماء معروفين
  - مقاطع لأطباء نفسيين مسلمين
  - تصنيف الفيديوهات حسب الموضوع والشعور

- [ ] **مقالات ودروس**
  - مقالات تعليمية عن التعامل مع المشاعر إسلامياً
  - نصائح نفسية من منظور إسلامي

#### المرحلة الخامسة: مميزات إضافية
- [ ] **التذكيرات**
  - إشعارات يومية للذكر
  - تخصيص أوقات التذكير

### 📦 البناء والتشغيل

#### المتطلبات
- Node.js 18+
- npm أو yarn
- Android Studio (للتطوير على الأندرويد)
- JDK 21

#### التثبيت
```bash
# استنساخ المشروع
git clone https://github.com/Haithem-SBOUI/feeling-dhikr-app.git
cd feeling-dhikr-app

# تثبيت الحزم
npm install

# تشغيل في المتصفح
npm start

# بناء للإنتاج
npm run build
npx cap sync android

# بناء APK
cd android
./gradlew assembleDebug
```

#### APK موقع الملف
```
android/app/build/outputs/apk/debug/app-debug.apk
```

### 🤝 المساهمة

**المساهمات مرحب بها بشدة!** 🎉

نحن نرحب بمساهماتكم في تحسين هذا التطبيق. سواء كنت تريد:
- 🐛 إصلاح خطأ
- ✨ إضافة ميزة جديدة
- 📝 تحسين التوثيق
- 🌍 إضافة ترجمة
- 🎨 تحسين التصميم
- 📿 إضافة المزيد من الأذكار

#### كيفية المساهمة:

1. **Fork** المشروع
2. قم بإنشاء فرع للميزة (`git checkout -b feature/AmazingFeature`)
3. قم بعمل Commit لتغييراتك (`git commit -m 'Add some AmazingFeature'`)
4. قم بعمل Push للفرع (`git push origin feature/AmazingFeature`)
5. افتح **Pull Request**

#### إرشادات المساهمة:
- اتبع أسلوب الكود الموجود
- اكتب تعليقات واضحة بالعربية أو الإنجليزية
- اختبر تغييراتك قبل تقديم PR
- تأكد من أن جميع الأذكار من مصادر موثوقة (القرآن، الأحاديث الصحيحة)

### 📄 الترخيص

هذا المشروع مرخص تحت MIT License - انظر ملف [LICENSE](LICENSE) للتفاصيل.

### 📧 التواصل

- **GitHub**: [@Haithem-SBOUI](https://github.com/Haithem-SBOUI)
- **المشروع**: [feeling-dhikr-app](https://github.com/Haithem-SBOUI/feeling-dhikr-app)

### 🙏 شكر وتقدير

- جميع الأذكار والأدعية مأخوذة من القرآن الكريم والأحاديث الصحيحة
- تصميم الأيقونات من Ionicons
- إطار العمل من Ionic و Angular

---

<a name="english"></a>
## 📖 English

### 🌟 Overview

Feeling Dhikr App is an innovative Android application that connects your daily emotions with appropriate Islamic remembrances (Dhikr) and supplications. The app helps you deal with your feelings through remembrance of Allah and continuous Dhikr.

### 💡 Project Idea

The core idea is to provide an app that allows users to select their current feeling (happy, sad, anxious, grateful, etc.), and then displays a collection of appropriate Dhikr and supplications from the Quran and Sunnah. Each Dhikr comes with a repetition counter, progress tracking, and daily statistics.

### ✨ Current Features

- 📱 **11 Different Feelings** - Happy, Sad, Angry, Anxious, Bored, Confident, Confused, Content, Depressed, Doubtful, Grateful
- 📿 **60+ Dhikr & Verses** - From the Holy Quran and authentic Prophetic Hadiths
- 🎯 **Smart Counter** - Track progress with automatic counter and haptic feedback on completion
- ✅ **Achievement Tracking** - Shows how many times you've completed the Dhikr (×1, ×2, ×3...)
- ⏱️ **Smart Expiration System** - Counter resets automatically after one hour
- 📊 **Detailed Statistics** - Daily, weekly, and monthly tracking of your progress
- 🔥 **Streak System** - Maintain your consecutive days streak
- 🌓 **Dark Mode** - Full support for night mode
- 🌍 **Bilingual** - Full support for Arabic and English
- 🎨 **Beautiful Design** - Modern and user-friendly interface
- 📳 **Haptic Feedback** - Vibration on each tap and when completing Dhikr

### 🛠️ Technologies Used

#### Frontend
- **Ionic Framework 7** - Hybrid mobile app framework
- **Angular 17+** - JavaScript framework with Signals and Standalone Components
- **TypeScript** - Typed programming language
- **Capacitor** - Bridge for web apps to native Android features

#### Mobile
- **Android SDK** - Android app development
- **Capacitor Plugins**:
  - `@capacitor/haptics` - Haptic feedback
  - `@capacitor/status-bar` - Status bar customization
  - `@capacitor/keyboard` - Keyboard control
  - `@capacitor/app` - App lifecycle

#### Styling
- **CSS3** - Advanced styling with animations
- **Ionic Components** - Ready-made UI components
- **Custom Animations** - Custom animations for counters and achievements

#### Data Storage
- **LocalStorage** - Local storage for data and progress
- **JSON** - Data format for Dhikr and feelings

### 📁 Project Structure

```
feeling-dhikr-app/
├── src/
│   ├── app/
│   │   ├── components/           # Reusable components
│   │   │   ├── dhikr-card/      # Dhikr card with counter
│   │   │   └── feelings-list/    # Feelings list
│   │   ├── pages/                # App pages
│   │   │   ├── dhikr-list/      # Dhikr list for a feeling
│   │   │   ├── statistics/       # Statistics page
│   │   │   ├── settings/         # Settings
│   │   │   └── about/            # About page
│   │   ├── home/                 # Home page
│   │   ├── models/               # TypeScript data models
│   │   ├── services/             # Services (statistics, data)
│   │   └── translations/         # Translations (Arabic/English)
│   ├── assets/
│   │   └── data/
│   │       └── feelings.json     # Feelings and Dhikr data
│   ├── theme/                    # Theme files
│   └── global.css                # Global styles
├── android/                      # Android project
└── capacitor.config.ts           # Capacitor configuration
```

### 🚀 Next Steps

#### Phase 1: Content Expansion
- [ ] **Add More Feelings**
  - Add 20-30 additional feelings
  - More detailed feeling categories
  
- [ ] **Subcategory System**
  - Add main categories (Problems, Finance, Relationships, Health, Work)
  - Under each category: specific sub-feelings
  - Example:
    ```
    Problems
    ├── Financial Problems
    ├── Family Problems
    ├── Health Problems
    └── Work Problems
    ```
  - When clicking on a feeling:
    - Top half: List of sub-feelings
    - Bottom half: General Dhikr for the category
    - Ability to scroll to view other Dhikr

- [ ] **Expand Dhikr Database**
  - Add 200+ Dhikr and supplications
  - Categorize Dhikr by topic and intensity

#### Phase 2: Authentication & Sync
- [ ] **Google Sign-In**
  - Integration with Google Sign-In
  - Save user data in the cloud
  
- [ ] **Data Synchronization**
  - Sync progress and achievements across devices
  - Automatic data backup
  - Restore data when logging in from a new device

#### Phase 3: Custom Dhikr
- [ ] **Personal Dhikr**
  - Allow users to add custom Dhikr
  - Ability to edit and delete custom Dhikr
  - Customize repetition count for each Dhikr
  - Link custom Dhikr to specific feelings

#### Phase 4: Educational References
- [ ] **Book Library**
  - Add references to trusted Islamic books
  - Link each feeling to related books
  - Display book excerpts
  
- [ ] **Video Content**
  - Videos from renowned scholars (Sheikh Muhammad Al-Ghazali, Sheikh Al-Sha'rawi, Dr. Tariq Al-Suwaidan)
  - Videos from Muslim psychologists
  - Categorize videos by topic and feeling
  - Integration with YouTube API

- [ ] **Articles & Lessons**
  - Educational articles about dealing with emotions Islamically
  - Psychological advice from an Islamic perspective

#### Phase 5: Additional Features
- [ ] **Reminders**
  - Daily Dhikr notifications
  - Customize reminder times
  
- [ ] **Badges & Achievements**
  - Points and badges system
  - Daily and weekly challenges
  
- [ ] **Social Sharing**
  - Share achievements
  - Motivate friends

- [ ] **Offline Mode**
  - Download content for offline access
  - Audio playback for Dhikr

### 📦 Build & Run

#### Requirements
- Node.js 18+
- npm or yarn
- Android Studio (for Android development)
- JDK 21

#### Installation
```bash
# Clone the project
git clone https://github.com/Haithem-SBOUI/feeling-dhikr-app.git
cd feeling-dhikr-app

# Install packages
npm install

# Run in browser
npm start

# Build for production
npm run build
npx cap sync android

# Build APK
cd android
./gradlew assembleDebug
```

#### APK Location
```
android/app/build/outputs/apk/debug/app-debug.apk
```

### 🤝 Contributing

**Contributions are highly welcomed!** 🎉

We welcome your contributions to improve this app. Whether you want to:
- 🐛 Fix a bug
- ✨ Add a new feature
- 📝 Improve documentation
- 🌍 Add translation
- 🎨 Improve design
- 📿 Add more Dhikr

#### How to Contribute:

1. **Fork** the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a **Pull Request**

#### Contribution Guidelines:
- Follow existing code style
- Write clear comments in Arabic or English
- Test your changes before submitting PR
- Ensure all Dhikr are from trusted sources (Quran, authentic Hadiths)

### 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### 📧 Contact

- **GitHub**: [@Haithem-SBOUI](https://github.com/Haithem-SBOUI)
- **Project**: [feeling-dhikr-app](https://github.com/Haithem-SBOUI/feeling-dhikr-app)

### 🙏 Acknowledgments

- All Dhikr and supplications are taken from the Holy Quran and authentic Hadiths
- Icon design from Ionicons
- Framework from Ionic and Angular

---

<div align="center">

**Made with ❤️ for the Muslim Ummah**

**بُني بـ ❤️ للأمة الإسلامية**

</div>
