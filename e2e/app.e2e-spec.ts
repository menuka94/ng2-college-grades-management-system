import { CollegeGradesManagementSystemPage } from './app.po';

describe('college-grades-management-system App', function() {
  let page: CollegeGradesManagementSystemPage;

  beforeEach(() => {
    page = new CollegeGradesManagementSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
