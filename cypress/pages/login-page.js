import page from './page.js';

const login = 'input[type="email"]';
const pass = 'input[type="password"]';
const signIn = 'button[type="submit"]';

class LoginPage {
  getLogin() {
    return page.getElement(login);
  }
  getPassword() {
    return page.getElement(pass);
  }

  clickSignInButton() {
    page.clickElement(signIn);
  }
}

module.exports = new LoginPage();
