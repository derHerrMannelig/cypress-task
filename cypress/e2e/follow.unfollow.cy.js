import page from '../pages/page.js';
import mainPage from '../pages/main.page.js';
import loginPage from '../pages/login.page.js';

const baseUrl = Cypress.config().baseUrl;
const testData = JSON.parse(JSON.stringify(require('../fixtures/data.json')));

let randomIndex;
let initialAuthorName;

describe('follow/unfollow', () => {
  before(() => {
    mainPage.clickSignInButton();
    loginPage.getLogin().type(`${testData.user.email}`);
    loginPage.getPassword().type(`${testData.user.password}`);
    loginPage.clickSignInButton();
    mainPage.getNickname().invoke('text').should('include', `${testData.user.nickname}`);
  });
  it('verifies follow/unfollow functionality', () => {
    mainPage.clickFeedButton();
    page.currentUrl().should('eq', `${baseUrl}`);
    mainPage.getFeed().should('have.class', 'active');
    mainPage.getAuthors().its('length').then((len) => {
      randomIndex = Math.floor(Math.random() * len);
      mainPage.getAuthors().eq(randomIndex).invoke('text').then((text) => {
        initialAuthorName = text;
        mainPage.getAuthors().eq(randomIndex).click();
        mainPage.getActiveAuthor().should('be.visible');
        mainPage.getActiveAuthor().invoke('text').should('include', initialAuthorName);
        mainPage.clickFollowButton();
        mainPage.getFollow().invoke('text').should('include', 'Unfollow');
        mainPage.clickLogoButton();
        page.currentUrl().should('eq', `${baseUrl}`);
        mainPage.getFollowedAuthor().should('be.visible');
        mainPage.getFollowedAuthor().invoke('text').should('include', initialAuthorName);
        mainPage.clickFollowedAuthor();
        mainPage.getActiveAuthor().should('be.visible');
        mainPage.getActiveAuthor().invoke('text').should('include', initialAuthorName);
        mainPage.clickFollowButton();
        mainPage.getFollow().invoke('text').should('include', 'Follow');
        mainPage.clickLogoButton();
        mainPage.getNoArticlesElement().should('be.visible');
        mainPage.getNoArticlesElement().invoke('text').should('include', 'No articles are here... yet.');
      })
    })
  })
})
