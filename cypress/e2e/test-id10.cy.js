import page from '../pages/page.js';
import mainPage from '../pages/main-page.js';
import loginPage from '../pages/login-page.js';

const baseUrl = Cypress.config().baseUrl;
const testData = JSON.parse(JSON.stringify(require('../fixtures/data.json')));

let randomIndex;

describe('logout', () => {
  before(() => {
    mainPage.clickSignInButton();
    page.currentUrl().should('eq', `${baseUrl}login`);
    loginPage.getLogin().type(`${testData.user.email}`);
    loginPage.getPassword().type(`${testData.user.password}`);
    loginPage.getLogin().should('have.value', `${testData.user.email}`);
    loginPage.getPassword().should('have.value', `${testData.user.password}`);
    loginPage.clickSignInButton();
    page.currentUrl().should('eq', `${baseUrl}`);
    mainPage.getNickname().should('be.visible');
    mainPage.getNickname().invoke('text').should('include', `${testData.user.nickname}`);
  });
  it('verifies logout', () => {
    mainPage.clickSettingsButton();
    page.currentUrl().should('eq', `${baseUrl}settings`);
    mainPage.clickLogoutButton();
    page.currentUrl().should('eq', `${baseUrl}`);
    mainPage.getLikeButtons().its('length').then((len) => {
      randomIndex = Math.floor(Math.random() * len);
      mainPage.getLikeButtons().eq(randomIndex).click();
      page.currentUrl().should('eq', `${baseUrl}register`);
    })
  })
})
