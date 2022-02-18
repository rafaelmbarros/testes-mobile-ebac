class FormScreen {
  waitForIsShown(isShown = true) {
    return $('~Forms').waitForDisplayed({
      timeout: 100000,
      reverse: !isShown,
    });
  }
  async fillForms() {
    const textInput = $('id:input');
    await textInput.setValue('http://lojaebac.ebaconline.art.br');

    const bottomButton = $('id:bottom_button');
    await bottomButton.click();
  }

  async continueWithCredentials() {
    const bottomButton = $('id:login_site_creds');
    await bottomButton.click();
  }

  async fillCredentials() {
    const usernameInput = $('android=new UiSelector().text("Username")');
    await usernameInput.setValue('gerente');

    const passwordInput = $('android=new UiSelector().text("Password")');
    await passwordInput.setValue('GD*peToHNJ1#c$sgk08EaYJQ');

    const continueButton = $('android=new UiSelector().text("Continue")');
    await continueButton.click();
  }

  async continueWithPassword() {
    const continueButton = $('id:login_enter_password');
    await continueButton.click();
  }

  async signInWithPassword() {
    const passwordInput = $('android=new UiSelector().text("Password")');
    await passwordInput.setValue('GD*peToHNJ1#c$sgk08EaYJQ');

    const bottomButton = $('id:bottom_button');
    await bottomButton.click();
  }

  async goToProducts() {
    const productsButton = $('~Products');
    await productsButton.click();
  }

  async addProduct() {
    const addProductButton = $('~Add products');
    await addProductButton.click();
  }

  async chooseProductType() {
    const chooseProductTypeButton = $('id:productDetailInfoItem_name');
    await chooseProductTypeButton.click();
  }

  async fillProductsDetails() {
    const productNameInput = $('id:editText');
    await productNameInput.setValue('Nome produto');

    const describeButton = $(
      'android=new UiSelector().text("Describe your product")'
    );
    await describeButton.click();

    const describeInput = $('id:visualEditor');
    await describeInput.setValue('descrição produto');

    const backButton = $('~Navigate up');
    await backButton.click();

    const publishButton = $('id:menu_publish');
    await publishButton.click();
  }
}

module.exports = android = new FormScreen();
