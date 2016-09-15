import { RBetsFrontendPage } from './app.po';

describe('r-bets-frontend App', function() {
  let page: RBetsFrontendPage;

  beforeEach(() => {
    page = new RBetsFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
