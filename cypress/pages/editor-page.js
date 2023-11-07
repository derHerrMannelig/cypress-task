import page from './page.js';

const title = 'input[placeholder="Article Title"]';
const desc = 'input[placeholder="What\'s this article about?"]';
const text = 'textarea[placeholder="Write your article (in markdown)"]';
const tags = 'input[placeholder="Enter tags"]';
const publish = 'button.btn-primary';
const titlePublished = 'h1.ng-binding';
const textPublished = 'div.ng-binding';

class EditorPage {
  getTitle() {
    return page.getElement(title);
  }
  getDesc() {
    return page.getElement(desc);
  }
  getText() {
    return page.getElement(text);
  }
  getTags() {
    return page.getElement(tags);
  }
  getPublishedTitle() {
    return page.getElement(titlePublished);
  }
  getPublishedText() {
    return page.getElement(textPublished);
  }

  clickPublishButton() {
    page.clickElement(publish);
  }
}

module.exports = new EditorPage();
