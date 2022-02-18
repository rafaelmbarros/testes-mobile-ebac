const { join } = require('path');

exports.config = {
  hostname: 'localhost',
  port: 4723,
  path: '/wd/hub',
  specs: ['./test/specs/**/*.js'],
  framework: 'mocha',
  waitforTimeout: 200000,
  mochaOpts: {
    timeout: 99999999,
  },
  capabilities: [
    {
      platformName: 'Android',
      platformVersion: '8.1',
      deviceName: 'ebac-qe',
      automationName: 'UiAutomator2',
      app: join(process.cwd(), './app/android/loja.apk'),
      appWaitDuration: 400000,
      // appPackage: 'com.wdiodemoapp',
      // appActivity: 'com.wdiodemoapp.MainActivity',
      appWaitActivity: 'com.woocommerce.android.ui.login.LoginActivity',
      // appWaitActivity: 'com.woocommerce.android/.ui.login.LoginActivity',
    },
  ],
};
