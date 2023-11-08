import page from '../pages/page.js';
import mainPage from '../pages/main-page.js';

const baseUrl = Cypress.config().baseUrl;

let randomIndex;

describe('tags', () => {
  it('verifies tags functionality', () => {
    mainPage.getTags().its('length').then((len) => {
      randomIndex = Math.floor(Math.random() * len);
      mainPage.getTags().eq(randomIndex).click();
      page.currentUrl().should('eq', `${baseUrl}`);
      mainPage.getActiveTag().should('be.visible');
      mainPage.getTags().eq(randomIndex).invoke('text').then((randomTagText) => {
        mainPage.getActiveTag().invoke('text').should('include', randomTagText);
      })
    })
    mainPage.clickFeedButton();
    page.currentUrl().should('eq', `${baseUrl}`);
    mainPage.getActiveTag().should('not.be.visible');
  })
})
