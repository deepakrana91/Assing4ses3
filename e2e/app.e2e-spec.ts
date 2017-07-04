import { Assing4ses3Page } from './app.po';

describe('assing4ses3 App', () => {
  let page: Assing4ses3Page;

  beforeEach(() => {
    page = new Assing4ses3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
