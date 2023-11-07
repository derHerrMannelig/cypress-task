import page from './page.js';

const login = 'input[type="email"]';
const pass = 'input[type="password"]';
const signIn = 'button[type="submit"]';
const register = 'a[ui-sref="app.register"]:contains("Need an account?")'
const error = 'li[ng-repeat="error in errors"]';

class LoginPage {
  getLogin() {
    return page.getElement(login);
  }
  getPassword() {
    return page.getElement(pass);
  }
  getError() {
    return page.getElement(error);
  }

  clickSignInButton() {
    page.clickElement(signIn);
  }
  clickRegisterButton() {
    page.clickElement(register);
  }
}

module.exports = new LoginPage();
