import page from '../pages/page.js';
import mainPage from '../pages/main.page.js';
import loginPage from '../pages/login.page.js';

const baseUrl = Cypress.config().baseUrl;
const { faker } = require('@faker-js/faker');
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();

describe('invalid login', () => {
  it('verifies invalid login', () => {
    mainPage.clickSignInButton();
    page.currentUrl().should('eq', `${baseUrl}login`);
    loginPage.getLogin().type(`${randomEmail}`);
    loginPage.getPassword().type(`${randomPassword}`);
    loginPage.getLogin().should('have.value', `${randomEmail}`);
    loginPage.getPassword().should('have.value', `${randomPassword}`);
    loginPage.clickSignInButton();
    page.currentUrl().should('eq', `${baseUrl}login`);
    loginPage.getError().should('be.visible');
    loginPage.getError().invoke('text').should('include', 'email or password is invalid');
  })
})
