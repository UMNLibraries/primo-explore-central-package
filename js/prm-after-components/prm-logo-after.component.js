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
  template: `
    <div class="product-logo product-logo-local" layout="row" layout-align="start center" layout-fill id="banner" tabindex="0" role="banner">
      <a ng-href="{{$ctrl.targetUrl}}" target="_top">
        <img class="logo-image" alt="{{::('nui.header.LogoAlt' | translate)}}" ng-src="{{$ctrl.iconLink}}"/>
      </a>
      <div ng-if="$ctrl.isTestEnvironment" style="position:absolute; top:44px; left:17px; color:#f5be23;"><b>Test Environment</b></div>
    </div>
  `
};

