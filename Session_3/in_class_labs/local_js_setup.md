1. Install:
- nvm: https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/
- a stable version of node: https://nodejs.org/en/download/prebuilt-installer/current
2. Open the console (a.k.a. terminal / command linie / cmd) and go to the main repo folder: <br>
```
cd {YOUR_PROJECT_DIRECTORY}
npm install -g browser-sync
```
 
4. copy the following code to {YOUR_PROJECT_DIRECTORY}/dev_files/watcher.js:
  ```
const browserSync = require('browser-sync').create();

 browserSync.init({
        server: './', // Set the root of your local server
        files: ['*.html', '*.css', '*.js', '*/*.js'], // Files to watch for changes
        // browser: 'google chrome', // Open in Google Chrome (you can change this)
    });
 ```
    
5. run:<br>
  ```node ./dev-files/watcher.js```
6. Next time you run it from the console:
```
cd {YOUR_PROJECT_DIRECTORY} && node ./dev_files/watcher.js
```


