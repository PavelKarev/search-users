import { SearchDevsPage } from './app.po';

describe('search-devs App', () => {
  let page: SearchDevsPage;

  beforeEach(() => {
    page = new SearchDevsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
