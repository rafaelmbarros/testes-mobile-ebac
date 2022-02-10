const { join } = require('path');

exports.config = {
  hostname: 'localhost',
  port: 4723,
  path: '/wd/hub',
  specs: ['./test/specs/**/*.js'],
  framework: 'mocha',
  capabilities: [
    {
      platformName: 'Android',
      platformVersion: '8.1',
      deviceName: 'ebac-qe',
      automationName: 'UiAutomator2',
      app: join(process.cwd(), './app/android/web.apk'),
      appWaitDuration: 400000,
      // appPackage: 'com.wdiodemoapp',
      // appActivity: 'com.wdiodemoapp.MainActivity',
      appWaitActivity: 'com.wdiodemoapp.MainActivity',
      // appWaitActivity: 'com.woocommerce.android/.ui.login.LoginActivity',
    },
  ],
};
