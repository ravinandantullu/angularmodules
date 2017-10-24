import { AngularmodulesPage } from './app.po';

describe('angularmodules App', () => {
  let page: AngularmodulesPage;

  beforeEach(() => {
    page = new AngularmodulesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
