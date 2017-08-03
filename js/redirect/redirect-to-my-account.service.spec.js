
describe('RedirectToMyAccount Service', () => {
  const VID = 'TEST', 
        LANG = 'en_US';

  let $location, 
      $window, 
      $state, 
      $timeout, 
      $translate, 
      sessionTimeoutService, 
      redirectToMyAccount;

  let fakeSessionTimeoutService = new class {
    startSession() {return null;}
    isSessionExpired() {return true;}
  };

  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('pascalprecht.translate'));
  beforeEach(angular.mock.module('redirect'));

  beforeEach(() => {
    angular.mock.module($provide => {
      $provide.value('SessionTimeoutService', fakeSessionTimeoutService);
    });
  });

  beforeEach(angular.mock.inject($injector => {
    $location = $injector.get('$location');
    $window = $injector.get('$window');
    $state = $injector.get('$state');
    $timeout = $injector.get('$timeout');
    $translate = $injector.get('$translate');
    sessionTimeoutService = $injector.get('SessionTimeoutService');
    $window.appConfig = {vid: VID};
    redirectToMyAccount = $injector.get('redirectToMyAccount');
    spyOn($translate, 'use').and.returnValue(LANG);
    spyOn(sessionTimeoutService, 'isSessionExpired').and.callThrough();
    spyOn(sessionTimeoutService, 'startSession').and.callThrough();
    spyOn($state, 'go').and.callThrough();
  }));

  it('should update the state when a "redirect=myaccount" parameter is provided', () => {
    $location.url('/search?redirect=myaccount');
    redirectToMyAccount.init();
    $timeout.flush();
    expect($state.go).toHaveBeenCalledWith('account', {vid: VID, lang: LANG, section: 'overview'}, {reload: true});
  });

  it('should not update the state when a "redirect=myaccount" parameter is absent', () => {
    $location.url('/search');
    redirectToMyAccount.init();
    $timeout.flush();
    expect($state.go).not.toHaveBeenCalled();
  });

  it('should reset the session if expired', () => {
    $location.url('/search?redirect=myaccount');
    redirectToMyAccount.init();
    expect(sessionTimeoutService.startSession).toHaveBeenCalled();
  });

});
