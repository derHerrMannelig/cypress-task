import page from '../pages/page.js';
import mainPage from '../pages/main.page.js';
import loginPage from '../pages/login.page.js';
import registerPage from '../pages/register.page.js';

const baseUrl = Cypress.config().baseUrl;
const { faker } = require('@faker-js/faker');
const randomNickname = faker.internet.userName();
const randomEmail = faker.internet.email();
const testData = JSON.parse(JSON.stringify(require('../fixtures/data.json')));

describe('login/register tips', () => {
  it('verifies login/register clues and tips', () => {
    mainPage.clickSignInButton();
    page.currentUrl().should('eq', `${baseUrl}login`);
    loginPage.getLogin().type(`${testData.user.email}`);
    loginPage.getLogin().should('have.value', `${testData.user.email}`);
    loginPage.clickSignInButton();
    page.currentUrl().should('eq', `${baseUrl}login`);
    loginPage.getError().should('be.visible');
    loginPage.getError().invoke('text').should('include', "password can't be blank");
    loginPage.getLogin().clear();
    loginPage.getPassword().type(`${testData.user.password}`);
    loginPage.getPassword().should('have.value', `${testData.user.password}`);
    loginPage.clickSignInButton();
    page.currentUrl().should('eq', `${baseUrl}login`);
    loginPage.getError().should('be.visible');
    loginPage.getError().invoke('text').should('include', "email can't be blank");
    loginPage.clickRegisterButton();
    page.currentUrl().should('eq', `${baseUrl}register`);
    registerPage.clickSignUpButton();
    page.currentUrl().should('eq', `${baseUrl}register`);
    registerPage.getError().should('be.visible');
    registerPage.getError().invoke('text').should('include', "email can't be blank");
    registerPage.getLogin().type(`${randomEmail}`);
    registerPage.getLogin().should('have.value', `${randomEmail}`);
    registerPage.clickSignUpButton();
    page.currentUrl().should('eq', `${baseUrl}register`);
    registerPage.getError().should('be.visible');
    registerPage.getError().invoke('text').should('include', "username can't be blank");
    registerPage.getNickname().type(`${randomNickname}`);
    registerPage.getNickname().should('have.value', `${randomNickname}`);
    registerPage.clickSignUpButton();
    page.currentUrl().should('eq', `${baseUrl}register`);
    registerPage.getError().should('be.visible');
    registerPage.getError().invoke('text').should('include', "password can't be blank");
    registerPage.clickSignInButton();
    page.currentUrl().should('eq', `${baseUrl}login`);
  })
})
