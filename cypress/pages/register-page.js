import page from './page.js';

const nickname = 'input[type="text"]';
const login = 'input[type="email"]';
const pass = 'input[type="password"]';
const signUp = 'button[type="submit"]';
const displayName = 'a.nav-link.ng-binding[ui-sref-active="active"]';

class RegisterPage {
  getNickname() {
    return page.getElement(nickname);
  }
  getLogin() {
    return page.getElement(login);
  }
  getPassword() {
    return page.getElement(pass);
  }
  getDisplayName() {
    return page.getElement(displayName);
  }

  clickSignUpButton() {
    page.clickElement(signUp);
  }
}

module.exports = new RegisterPage();
