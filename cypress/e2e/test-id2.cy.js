import page from '../pages/page.js';
import mainPage from '../pages/main-page.js';

const baseUrl = Cypress.config().baseUrl;

describe('footer', () => {
  it('verifies footer position and link', () => {
    mainPage.getFooter().should('have.css', 'position', 'fixed');
    mainPage.getFooter().should('have.attr', 'target', '_blank');
    mainPage.getFooter().should('have.attr', 'href', 'https://github.com/gothinkster/angularjs-realworld-example-app');
    mainPage.clickGithubButton();
    page.currentUrl().should('eq', `${baseUrl}`);
  })
})
