class PrmLogoAfterController {
  constructor($window) {
    this._$window = $window;
  }

  $onInit() {
    console.log(this);
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

}

PrmLogoAfterController.$inject = ['$window'];

export default {
  bindings: {parentCtrl: '<'},
  controller: PrmLogoAfterController, 
  template: `
    <div class="product-logo product-logo-local" layout="row" layout-align="start center" layout-fill id="banner" tabindex="0" role="banner">
      <a ng-href="{{$ctrl.targetUrl}}" target="_top">
        <img class="logo-image" alt="{{::('nui.header.LogoAlt' | translate)}}" ng-src="{{$ctrl.iconLink}}"/>
      </a>
    </div>
  `
}

