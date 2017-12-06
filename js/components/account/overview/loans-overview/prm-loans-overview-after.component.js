import illTemplate from './ill-overview.html';

class PrmLoansOverviewAfterController {
  constructor($window, $scope, $compile, $element) {
    this.$scope = $scope;
    this.institution = $window.appConfig['primo-view']['institution']['institution-code'];
    this.illTile = $compile(illTemplate)($scope);
    this.accoutOverviewGrid = $element.parent().parent();
  }

  get illAccountLink() {
    if (this.institution === 'TWINCITIES') {
      return 'http://ezproxy.lib.umn.edu/login?qurl=https%3A%2F%2Fumn.illiad.oclc.org%2Filliad%2FILLiad.dll';
    } else
      return null;
  }

  appendIllTileToAccountOverview() {
    let unbindWatch = this.$scope.$watch('$ctrl.accoutOverviewGrid', 
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

PrmLoansOverviewAfterController.$inject = ['$window', '$scope', '$compile', '$element'];

export default {
  controller: PrmLoansOverviewAfterController
};