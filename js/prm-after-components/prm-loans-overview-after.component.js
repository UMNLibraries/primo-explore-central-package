const ILL_TEMPLATE = `
  <div class="tiles-grid-tile">
    <div class="tile-content layout-column" layout="column">
      <div class="tile-header layout-column" layout="column">
        <div layout="row" layout-align="space-between" class="layout-align-space-between-stretch layout-row">
          <h2 class="light-text">
            <span>Interlibrary Loan</span>
          </h2>
        </div>
      </div>
      <div layout="column" layout-align="center center">
        <md-button class="button-link md-primoExplore-theme md-ink-ripple" ng-href="{{$ctrl.illAccountLink}}" target="_blank">
          My ILL Account
          <md-tooltip>Sign in to your interlibrary loan account</md-tooltip>
          <prm-icon external-link="" icon-type="svg" svg-icon-set="primo-ui" icon-definition="open-in-new"></prm-icon>
        </md-button>
      </div>
    </div>
  </div>
`;

class PrmLoansOverviewAfterController {
  constructor($window, $scope, $compile, $element) {
    this._$scope = $scope;
    this.institution = $window.appConfig['primo-view']['institution']['institution-code'];
    this.illTile = $compile(ILL_TEMPLATE)($scope);
    this.accoutOverviewGrid = $element.parent().parent();
  }

  get illAccountLink() {
    if (this.institution === 'TWINCITIES') {
      return 'http://ezproxy.lib.umn.edu/login?qurl=https%3A%2F%2Fumn.illiad.oclc.org%2Filliad%2FILLiad.dll';
    } else
      return null;
  }

  appendIllTileToAccountOverview() {
    let unbindWatch = this._$scope.$watch('$ctrl.accoutOverviewGrid', 
      accountOverviewGrid => {
        if (accountOverviewGrid) {
          accountOverviewGrid.append(this.illTile);
          unbindWatch();
        } 
      }
    );
  }

  $postLink() {
    if (this.illAccountLink) {
      this.appendIllTileToAccountOverview();
    }
  }
}

export default {
  controller: PrmLoansOverviewAfterController
};