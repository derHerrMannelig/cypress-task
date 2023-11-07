import page from './page.js';

const logo = 'a.navbar-brand[ui-sref="app.home"]';
const home = 'a.nav-link[ui-sref="app.home"]:first';
const signIn = 'a.nav-link[ui-sref="app.login"]';
const register = 'a.nav-link[ui-sref="app.register"]';

class MainPage {
  gotoBaseUrl() {
    page.openUrl();
  }

  clickLogoButton() {
    page.clickElement(logo);
  }
  clickHomeButton() {
    page.clickElement(home);
  }
  clickSignInButton() {
    page.clickElement(signIn);
  }
  clickRegisterButton() {
    page.clickElement(register);
  }
}

module.exports = new MainPage();
