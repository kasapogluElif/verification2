# cs458

## Project 2

### Run the app
```
cd verification2
npm install
For ios, also these steps have to be done
    cd ios
    pod install 
    return to verification2 directory (cd ..)
    react-native unlink react-native-gesture-handler
    react-native unlink react-native-safe-area-context
    react-native unlink react-native-vector-icons
    
npm react-native start (do not close this terminal, open a new terminal and continue)
npm react-native run-ios (for ios)
npm react-native run-android (for android)

further info can be found at https://reactnative.dev/docs/running-on-device
```



<h2>Prerequisites for test</h2>
<ul>
    <li><code>npm install -g appium</code></li>
</ul>

<h2>Run tests</h1>
<ul>
    <li>update the path to the APK file in <code>__tests__/app.test.js</code></li>
    <li><code>npm install</code></li>
    <li><code>npx react-native start</code></li>
    <li><code>npx react-native run-android</code></li>
    <li><code>npm run appium</code></li>
    <li><code>npm test</code></li>
</ul>
