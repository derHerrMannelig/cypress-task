import page from './page.js';

const login = 'input[type="email"]';
const pass = 'input[type="password"]';
const signIn = 'button[type="submit"]';
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
}

module.exports = new LoginPage();
