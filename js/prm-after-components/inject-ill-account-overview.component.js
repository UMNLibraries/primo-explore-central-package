const TEMPLATE = `
  <div class="tiles-grid-tile">
    <div class="tile-content layout-column" layout="column">
      <div class="tile-header layout-column" layout="column">
        <div layout="row" layout-align="space-between" class="layout-align-space-between-stretch layout-row">
          <h2 class="light-text">
            <span>Interlibrary Loans</span>
          </h2>
        </div>
      </div>
      <div layout="column" layout-align="center center">
          <md-button class="button-link md-primoExplore-theme md-ink-ripple" ng-href="{{$ctrl.link}}" target="_blank">
            My ILL Account
            <md-tooltip>Sign in to you interlibrary loan accout</md-tooltip>
            <prm-icon external-link="" icon-type="svg" svg-icon-set="primo-ui" icon-definition="open-in-new"></prm-icon>
          </md-button>
      </div>
    </div>
  </div>
`

class InjectIllAccountOverviewController {
  constructor($document, $window, $timeout, $scope, $compile) {
    this._$document = $document;
    this._$timeout = $timeout;
    this.inst = $window.appConfig['primo-view']['institution']['institution-code'];
    this._illTile = $compile(TEMPLATE)($scope);
  }

  get link() {
    if (this.inst === 'TWINCITIES') {
      return 'http://ezproxy.lib.umn.edu/login?qurl=https%3A%2F%2Fumn.illiad.oclc.org%2Filliad%2FILLiad.dll';
    } else
      return null;
  }

  $postLink() {
    if (this.link) {
      this._$timeout(() => {
        let accountOverviewGrid = this._$document[0].querySelector('#tab-content-0 div.tiles-grid');
        angular.element(accountOverviewGrid).append(this._illTile);
      });
    }
  }
}

export default {
  controller: InjectIllAccountOverviewController
}
