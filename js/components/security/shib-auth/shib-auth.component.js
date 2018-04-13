import template from './shib-auth.html';

class ShibAuthController {

  constructor(host, target, shibAuthEvents, $sce, $element, $timeout) {
    this.shibAuthEvents = shibAuthEvents;
    this.$element = $element;
    this.$timeout = $timeout;
    this.src = 
      $sce.trustAsResourceUrl(`https://${host}/Shibboleth.sso/Login?isPassive=true&target=${encodeURIComponent(target)}`);
  }

  $onInit() {
    this.authenticationCallback = () => this.handleAuthentication();
    this.shibAuthEvents.addObserver(this.authenticationCallback);
    this.timer = this.$timeout(() => this.removeIframe(), 5000);
  }

  handleAuthentication() {
    this.onAuth();
    this.shibAuthEvents.removeObserver(this.authenticationCallback);
    this.removeIframe();
  }

  removeIframe() {
    this.$element.find('iframe')[0].remove();
  }

  $onDestroy() {
    this.shibAuthEvents.removeObserver(this.authenticationCallback);
    this.$timeout.cancel(this.timer);
  }

}

ShibAuthController.$inject = ['shibAuthHost', 'shibAuthTarget', 'shibAuthEvents', '$sce', '$element', '$timeout'];

export default {
  bindings: {
    onAuth: '&'
  },
  controller: ShibAuthController,
  template: template,
  transclude: true
};