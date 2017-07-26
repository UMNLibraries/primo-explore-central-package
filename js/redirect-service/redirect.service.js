/**
 * This service attempts to send the user to the "My Library Card" page
 * when the URL contains a "&redirect=myaccount" parameter. This is an 
 * attempt to get around the fact that it's *really* hard to provide 
 * consistent deep links to this page. The default behavior can vary
 * depending on whether the user has a new, exiting, or expired session.
 */

class Redirect {
  constructor($location, $window, $state, SessionTimeoutService, $timeout) {
    this.$location = $location; 
    this.$state = $state;
    this.$window = $window;
    this.$timeout = $timeout;
    this.SessionTimeoutService = SessionTimeoutService;
  }

  init() {
    if (this.redirectRequested()) {
      if (this.isSessionExpired()) {
        this.SessionTimeoutService.startSession();
      }
      this.goToMyLibraryCard();
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
    console.log("redirecting to account");
    // This is pretty ugly, but it only seems to work consistently if $timeout
    // is used to wait for the next digest cycle. 
    this.$timeout(() => {
      this.$state.go('account', {vid: this.vid, lang: this.lang, section: 'overview'}, {reload: true});
    });
  }

  reloadPage() {
    this.$window.location.reload();
  }
}

Redirect.$inject = ['$location', '$window', '$state', 'SessionTimeoutService', '$timeout'];

export default Redirect;
