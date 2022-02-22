const homeScreen = require('../screens/home.screen');
const formScreen = require('../screens/form.screen');

describe('Access Admin Panel', () => {
  it('should login with valid credentials', async () => {
    await homeScreen.goToLogin();

    await formScreen.fillForms();
    await formScreen.continueWithCredentials();
    await formScreen.fillCredentials();
    await formScreen.continueWithPassword();
    await formScreen.signInWithPassword();
    await formScreen.goToProducts();
    await formScreen.addProduct();
    await formScreen.chooseProductType();
    await formScreen.fillProductsDetails();

    expect($('~More options')).toBeDisplayed();
  });
});
