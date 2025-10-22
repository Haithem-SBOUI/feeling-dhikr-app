# 1) Build web assets
npm run build

# 2) Sync Capacitor to generate/update android project
npx cap sync android

# 3) Change into android project directory
cd android

# 4) Build debug APK with Gradle
./gradlew assembleDebug

APK_PATH="app/build/outputs/apk/debug/app-debug.apk"
if [[ -f "$APK_PATH" ]]; then
  echo "\nSuccess: Debug APK generated at: $PWD/$APK_PATH"
else
  echo "\nWarning: APK not found at expected path: $PWD/$APK_PATH" >&2
fi
