import page from '../pages/page.js';
import mainPage from '../pages/main-page.js';

const baseUrl = Cypress.config().baseUrl;

describe('navbar links', () => {
  it('verifies all navbar links', () => {
    mainPage.clickSignInButton();
    page.currentUrl().should('eq', `${baseUrl}login`);
    mainPage.clickHomeButton();
    page.currentUrl().should('eq', `${baseUrl}`);
    mainPage.clickRegisterButton();
    page.currentUrl().should('eq', `${baseUrl}register`);
    mainPage.clickLogoButton();
    page.currentUrl().should('eq', `${baseUrl}`);
  })
})
