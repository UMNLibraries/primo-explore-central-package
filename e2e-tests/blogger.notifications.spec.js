let loadAngularMocksModule = require('./angular-mocks.module.js').mock;

function loadHttpMockModule() {
  angular.module('httpMock', ['ngMockE2E'])
    .run(($httpBackend, bloggerBaseUrl) => {
      let url = bloggerBaseUrl 
              + '/feeds/posts/default?alt=json-in-script&callback=JSON_CALLBACK';
      $httpBackend.whenJSONP(url).respond(200, {
        feed: {
          entry: [{
            updated: {$t: '2016-11-12T21:25:30.000Z'},
            title:{
              type: 'text',
              $t: 'Test Notification'
            },
            content: {
              type: 'text',
              $t: 'This is a test.'
            }
          }]
        }
      });
    });
}

describe('Blogger Notifications', () => {

  beforeEach(() => {
    browser.addMockModule('ngMockE2E', loadAngularMocksModule);
    browser.addMockModule('httpMock', loadHttpMockModule);
    browser.get('search?vid=TWINCITIES');
    browser.waitForAngularEnabled(false);
  });

  afterEach(function(){
    browser.waitForAngularEnabled(true);
    browser.clearMockModules(); 
  });

  it('Displays the first feed entry in a dialog', () => {
    expect(element(by.css('md-toast.blogger-notification')).getText())
      .toContain('Test Notification: This is a test.');
  });

  it('Does not display a message that has been dismissed', () => {
    let dismissButton = element(by.css('md-toast.blogger-notification button'));
    let dismissButtonIsClickable = protractor.ExpectedConditions
      .elementToBeClickable(dismissButton);
    browser.wait(dismissButtonIsClickable);
    browser.actions().mouseMove(dismissButton).click().perform();
    browser.refresh();
    expect(element(by.css('md-toast.blogger-notification')).isPresent()).toBeFalsy();
  });

});