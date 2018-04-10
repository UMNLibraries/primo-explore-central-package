import template from './shib-auth.html';

class ShibAuthController {

  constructor(host, target, shibAuthEvents, $sce) {
    this.shibAuthEvents = shibAuthEvents;
    this.src = $sce.trustAsResourceUrl(`https://${host}/Shibboleth.sso/Login?isPassive=true&target=${encodeURIComponent(target)}`);
    this.authenticationCallback = () => this.handleAuthentication();
    //$sce.trustAsResourceUrl(this.src);
  }

  $onInit() {
    this.shibAuthEvents.addObserver(this.authenticationCallback);
  }

  handleAuthentication() {
    this.onAuth();
    this.shibAuthEvents.removeObserver(this.authenticationCallback);
    // TODO: destroy element? (then maybe move the line above to destroy hook?)
  }

  // TODO: remove element after timeout? (If so, cancel timeout promise with $onDestroy())

}

ShibAuthController.$inject = ['shibAuthHost', 'shibAuthTarget', 'shibAuthEvents', '$sce'];

export default {
  bindings: {
    onAuth: '&'
  },
  controller: ShibAuthController,
  template: template
};