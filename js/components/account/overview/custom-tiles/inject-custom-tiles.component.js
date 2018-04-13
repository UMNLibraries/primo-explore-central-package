import template from './custom-tiles.html';

/**
 * Appends the "custom-tiles" template to the My Account Overview grid. 
 * 
 * This component (element directive) should be placed in any of the
 * prm-{tile}-overview-after components as a child element. For example: 
 *  <prm-loans-overview-after>
 *    <inject-custom-tiles></inject-custom-tiles>
 *  </prm-loans-overview-after>
 * 
 */
class InjectCustomTilesController {
  constructor($window, $scope, $compile, $element) {
    this.$scope = $scope;
    this.$element = $element;
    this.template = $compile(template)($scope);
    this.institution = 
      $window.appConfig['primo-view']['institution']['institution-code'];
  }

  getAccountOverviewGrid(){
    return this.$element.parent().parent().parent();
  }

  appendCustomTiles() {
    let unbindWatch = this.$scope.$watch(() => this.getAccountOverviewGrid(), 
      accountOverviewGrid => {
        if (accountOverviewGrid) {
          accountOverviewGrid.append(this.template);
          unbindWatch();
        } 
      }
    );
  }

  $postLink() {
    if (this.institution == 'TWINCITIES') {
      this.appendCustomTiles();
    }
  }
}

InjectCustomTilesController.$inject = ['$window', '$scope', '$compile', '$element'];

export default {
  controller: InjectCustomTilesController,
};
