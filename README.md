# Habit-Tracker
Habit Tracker is a user-friendly application designed to help individuals track their daily activities and cultivate a healthy, productive lifestyle.

This app is ideal for goal setters, fitness enthusiasts, students, and busy professionals who want to to track their daily activities, establish positive routines, and boost productivity.                                                                                                                                                                                                Whether it's fitness, academics, or work-life balance, this intuitive app supports users in their journey toward self-improvement.

	
Features of the app:-
1. Creation of Routines
2. Notifications / reminders
3. Goal's setting and customizing
4. Real time progress tracking and rewards
5.Custom Language, fonts and profile picture.

UI FLow/ UI Mock: https://drive.google.com/file/d/1ajm3pOi1AAP3RftERKyMPoX1CegjiD5s/view?usp=sharing

UserFlow:
1. When a new user first opens the app, they will be prompted with description about the app.
2. The home screen features a "create a routine" button and "Routines" button. It also has options to directly navigate between various pages in the app.
3. When clicked on "create a routine" button, user is taken to a Create Page, where they can create their own routine by setting goals according to their preference.
4. If user clicks on "Routine" button, he/she will be navigated to Routine List Page which conatins all the routines created/saved by default that can be used without creating a new one.
5. User can access their progress report from home screen which will show their achievements and rewards.
6. Users can also change the fonts, language and update their profile picture from settings page.

For this code to work, Install:
1. Android Studio (for emulator)
2. SDK
3. JDK (JAVA)
4. Node.js
5. BundleTool
6. Chocolatey
7. VSCode (editor)

Instructions to run the code:
1. $ npx react-native@latest init app_name
2. $ python ./reactnative-setup.py $ python somewhere/reactnative-setup.py  ( clone https://github.com/bjmckenz/rn-cli-fixup.git in your home directory before this step for reactnative-setup.py)
...Output: does things. leaves copy of messages in **reactnative-fixup.txt**
3. $ npx react-native doctor <--- at least once, verify it is ALL GREEN
4. To run:
   $ npx react-native run-android
6. To Build apk file:
   cd android ; .\gradlew build ; .\gradlew bundleRelease
7. $ java -jar "C:\Program Files\bundletool-all-1.15.6.jar" build-apks --bundle=app\build\outputs\bundle\release\app-release.aab --output=app\build\outputs\apk\release\app-release.apks --mode=universal --ks=..\android/app/my-release-key.jks --ks-pass=pass:12345678 --ks-key-alias=my-key-alias --key-pass=pass:12345678
8. $ java -jar "C:\Program Files\bundletool-all-1.15.5.jar" extract-apks --apks=app\build\outputs\apk\release\app-release.apks --output-dir=app\build\outputs\apk\release\ --device-spec=..\android\universal.json
