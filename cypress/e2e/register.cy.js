import page from '../pages/page.js';
import mainPage from '../pages/main.page.js';
import registerPage from '../pages/register.page.js';

const baseUrl = Cypress.config().baseUrl;
const { faker } = require('@faker-js/faker');
const randomNickname = faker.internet.userName();
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();

describe('register', () => {
  it('verifies registration', () => {
    mainPage.clickRegisterButton();
    page.currentUrl().should('eq', `${baseUrl}register`);
    registerPage.getNickname().type(`${randomNickname}`);
    registerPage.getLogin().type(`${randomEmail}`);
    registerPage.getPassword().type(`${randomPassword}`);
    registerPage.getNickname().should('have.value', `${randomNickname}`);
    registerPage.getLogin().should('have.value', `${randomEmail}`);
    registerPage.getPassword().should('have.value', `${randomPassword}`);
    registerPage.clickSignUpButton();
    page.currentUrl().should('eq', `${baseUrl}register`);
    registerPage.getDisplayName().should('be.visible');
    registerPage.getDisplayName().invoke('text').should('include', `${randomNickname}`);
  })
})
