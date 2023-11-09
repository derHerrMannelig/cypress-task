import page from '../pages/page.js';
import mainPage from '../pages/main.page.js';
import loginPage from '../pages/login.page.js';
import editorPage from '../pages/editor.page.js';

const baseUrl = Cypress.config().baseUrl;
const { faker } = require('@faker-js/faker');
const randomTitle = faker.lorem.words();
const randomDesc = faker.lorem.sentence();
const randomText = faker.lorem.paragraph();
const randomTags = faker.lorem.words();
const testData = JSON.parse(JSON.stringify(require('../fixtures/data.json')));

describe('new article', () => {
  before(() => {
    mainPage.clickSignInButton();
    loginPage.getLogin().type(`${testData.user.email}`);
    loginPage.getPassword().type(`${testData.user.password}`);
    loginPage.clickSignInButton();
    mainPage.getNickname().invoke('text').should('include', `${testData.user.nickname}`);
  });
  it('verifies article creation', () => {
    mainPage.clickArticleButton();
    page.currentUrl().should('eq', `${baseUrl}editor/`);
    editorPage.getTitle().type(`${randomTitle}`);
    editorPage.getDesc().type(`${randomDesc}`);
    editorPage.getText().type(`${randomText}`);
    editorPage.getTags().type(`${randomTags}`);
    editorPage.getTitle().should('have.value', `${randomTitle}`);
    editorPage.getDesc().should('have.value', `${randomDesc}`);
    editorPage.getText().should('have.value', `${randomText}`);
    editorPage.getTags().should('have.value', `${randomTags}`);
    editorPage.clickPublishButton();
    editorPage.getPublishedTitle().should('be.visible');
    editorPage.getPublishedText().should('be.visible');
    editorPage.getPublishedTitle().should('have.text', `${randomTitle}`);
    editorPage.getPublishedText().should('have.text', `${randomText}\n`);
    editorPage.clickDeleteArticleButton();
    page.currentUrl().should('eq', `${baseUrl}`);
  })
})
