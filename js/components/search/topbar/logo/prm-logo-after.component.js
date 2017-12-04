import template from './prm-logo-after.html';

class PrmLogoAfterController {
  constructor($window, $location) {
    this._$window = $window;
    this._$location = $location;
  }

  get campus() {
    return this._$window.appConfig['primo-view']['institution']['institution-code'];
  }

  get targetUrl() {
    switch (this.campus) {
      case 'TWINCITIES': return 'https://www.lib.umn.edu/';
      case 'DULUTH': return 'https://lib.d.umn.edu/'; 
      case 'MORRIS': return 'https://library.morris.umn.edu/'; 
      case 'CROOKSTON': return 'https://www.crk.umn.edu/units/library'; 
      default: return '';
    }
  }

  get iconLink() {
    return this.parentCtrl.iconLink;
  }

  get isTestEnvironment() {
    let host = this._$location.host();
    return (host.startsWith('umn-primoalmasb') || host.startsWith('primo-test'));
  }

}

PrmLogoAfterController.$inject = ['$window', '$location'];

export default {
  bindings: {parentCtrl: '<'},
  controller: PrmLogoAfterController, 
  template: template
};

