/**
 * Appends content to the end of the My Account Overview grid.
 *
 * This component (element directive) should be placed in any of the
 * prm-{tile}-overview-after components as a child element. For example:
 *  <prm-loans-overview-after>
 *    <custom-tiles></custom-tiles>
 *  </prm-loans-overview-after>
 *
 */
class InjectCustomTilesController {
  constructor($scope, $compile, $element, config) {
    this.$scope = $scope;
    this.$element = $element;
    this.$compile = $compile;
    this.config = config;
  }

  getAccountOverviewGrid() {
    return this.$element.parent().parent().parent();
  }

  appendCustomTiles() {
    const unbindWatch = this.$scope.$watch(
      () => this.getAccountOverviewGrid(),
      (accountOverviewGrid) => {
        if (accountOverviewGrid.hasOwnProperty('length')) {
          accountOverviewGrid.append(this.template);
          unbindWatch();
        }
      }
    );
  }

  get template() {
    const html = '<courses></courses>';
    return this.$compile(html)(this.$scope);
  }

  $postLink() {
    if (this.config.showCustomAccountTiles) {
      this.appendCustomTiles();
    }
  }
}

InjectCustomTilesController.$inject = [
  '$scope',
  '$compile',
  '$element',
  'config',
];

export default {
  controller: InjectCustomTilesController,
};
