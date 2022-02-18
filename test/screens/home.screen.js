class HomeScreen {
  async goToLogin() {
    const button = $(`id:button_login_store`);
    button.click();
  }
}

module.exports = new HomeScreen();
