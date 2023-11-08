import page from './page.js';

const logo = 'a.navbar-brand[ui-sref="app.home"]';
const home = 'a.nav-link[ui-sref="app.home"]:first';
const signIn = 'a.nav-link[ui-sref="app.login"]';
const register = 'a.nav-link[ui-sref="app.register"]';
const article = 'a.nav-link[ui-sref="app.editor"]'
const footer = 'a:has(i.ion-social-github)';
const nickname = 'a.nav-link.ng-binding[ui-sref-active="active"]';
const tags = 'a.tag-default';
const tagActive = 'a.nav-link.active.ng-binding';
const feed = 'a.nav-link:contains("Global Feed")';

class MainPage {
  gotoBaseUrl() {
    page.openUrl();
  }

  getFooter() {
    return page.getElement(footer);
  }
  getNickname() {
    return page.getElement(nickname);
  }
  getTags() {
    return page.getElement(tags);
  }
  getActiveTag() {
    return page.getElement(tagActive);
  }

  clickLogoButton() {
    page.clickElement(logo);
  }
  clickHomeButton() {
    page.clickElement(home);
  }
  clickSignInButton() {
    page.clickElement(signIn);
  }
  clickRegisterButton() {
    page.clickElement(register);
  }
  clickGithubButton() {
    page.clickElement(footer);
  }
  clickArticleButton() {
    page.clickElement(article);
  }
  clickFeedButton() {
    page.clickElement(feed);
  }
}

module.exports = new MainPage();
