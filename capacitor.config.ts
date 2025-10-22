import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.haithemsboui.feelingdhikr',
  appName: 'Feeling Dhikr',
  webDir: 'www',
  plugins: {
    StatusBar: {
      style: 'dark',
      backgroundColor: '#3880ff',
      overlaysWebView: false
    }
  }
};

export default config;
