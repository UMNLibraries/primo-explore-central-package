class Redirect {
  constructor($location, $window, $state, SessionTimeoutService) {
    this.$location = $location; 
    this.$state = $state;
    this.$window = $window;
    this.SessionTimeoutService = SessionTimeoutService;
  }

  init() {
    if (this.redirectRequested()) {
      if (this.isSessionExpired()) {
        this.reloadPage();
      } else {
        this.goToMyLibraryCard();
      }
    }
  }

  get vid() {
    return this.$window.appConfig.vid;
  }

  redirectRequested() {
    return (this.$location.search()['redirect'] === 'myaccount');
  }

  isSessionExpired() {
    return this.SessionTimeoutService.isSessionExpired();
  }

  goToMyLibraryCard() {
    this.$state.go('account', {vid: this.vid, lang: this.lang, section: 'overview'}, {reload: true});
  }

  reloadPage() {
    this.$state.reload();
  }
}

Redirect.$inject = ['$location', '$window', '$state', 'SessionTimeoutService'];

export default Redirect;
