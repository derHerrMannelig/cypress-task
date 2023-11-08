import page from './page.js';

const nickname = 'input[type="text"]';
const login = 'input[type="email"]';
const pass = 'input[type="password"]';
const signUp = 'button[type="submit"]';
const signIn = 'a[ui-sref="app.login"]:contains("Have an account?")'
const displayName = 'a.nav-link.ng-binding[ui-sref-active="active"]';
const error = 'li[ng-repeat="error in errors"]';

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
  getError() {
    return page.getElement(error);
  }

  clickSignUpButton() {
    page.clickElement(signUp);
  }
  clickSignInButton() {
    page.clickElement(signIn);
  }
}

module.exports = new RegisterPage();
