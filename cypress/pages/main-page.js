import page from './page.js';

const logo = 'a.navbar-brand[ui-sref="app.home"]';
const home = 'a.nav-link[ui-sref="app.home"]:first';
const signIn = 'a.nav-link[ui-sref="app.login"]';
const register = 'a.nav-link[ui-sref="app.register"]';
const footer = 'a:has(i.ion-social-github)';

class MainPage {
  gotoBaseUrl() {
    page.openUrl();
  }

  getFooter() {
    return page.getElement(footer);
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
  clickGithubButton() {
    page.clickElement(footer);
  }
}

module.exports = new MainPage();
