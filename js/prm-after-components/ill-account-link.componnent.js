class IllAccountLinkController {
  constructor($window) {
    this._$window = $window;
  }
  $onInit() {
    this.inst = this._$window.appConfig['primo-view']['institution']['institution-code'];
  }
  get link() {
    if (this.inst === 'TWINCITIES') {
      return 'http://ezproxy.lib.umn.edu/login?qurl=https%3A%2F%2Fumn.illiad.oclc.org%2Filliad%2FILLiad.dll';
    } else
      return null;
  }
}

IllAccountLinkController.$inject = ['$window'];

export default {
  controller: IllAccountLinkController,
  template: `
            <md-button class="md-primary" ng-if="$ctrl.link" ng-href="{{$ctrl.link}}">
              <md-tooltip>Sign in to you interlibrary loan accout</md-tooltip>
              My ILL Account
            </md-button>
            `
};


