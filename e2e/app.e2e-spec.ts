import { StatuspherePage } from './app.po';

describe('statusphere App', () => {
  let page: StatuspherePage;

  beforeEach(() => {
    page = new StatuspherePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
