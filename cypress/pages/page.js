class Page {
  currentUrl() {
    return cy.url();
  }
  openUrl(url) {
    cy.visit(url == undefined ? '' : url);
  }
  getElement(element) {
    cy.get(element);
  }
  clickElement(element) {
    cy.get(element).click();
  }
}

module.exports = new Page();
