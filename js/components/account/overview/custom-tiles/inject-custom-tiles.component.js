/**
 * Appends the "custom-tiles" template to the My Account Overview grid.
 *
 * This component (element directive) should be placed in any of the
 * prm-{tile}-overview-after components as a child element. For example:
 *  <prm-loans-overview-after>
 *    <custom-tiles></custom-tiles>
 *  </prm-loans-overview-after>
 *
 */
class InjectCustomTilesController {
  constructor($window, $scope, $compile, $element, config) {
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

  get enableIlliad() {
    return this.config.enableIlliad;
  }

  get template() {
    // show either the ILLiad-integration components or the generic ILL component.
    let html = this.enableIlliad
      ? '<ill-requests></ill-requests><ill-articles></ill-articles>'
      : '<ill></ill>';
    html += '<courses></courses>';
    return this.$compile(html)(this.$scope);
  }

  $postLink() {
    if (this.config.showCustomAccountTiles) {
      this.appendCustomTiles();
    }
  }
}

InjectCustomTilesController.$inject = [
  '$window',
  '$scope',
  '$compile',
  '$element',
  'config',
];

export default {
  controller: InjectCustomTilesController,
};
