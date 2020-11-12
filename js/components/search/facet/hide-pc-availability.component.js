const exceptions = new Set(['MORRIS', 'CROOKSTON']);

/**
 * hide the "expand beyond" facet, unless:
 *  1) the campus is an `exception`, or
 *  2) the URL includes a 'showExpand' parameter
 */
class HidePcAvailabilityController {
  constructor($location, $window) {
    this.$location = $location;
    this.institution =
      $window.appConfig['primo-view']['institution']['institution-code'];
  }

  $onInit() {
    if (exceptions.has(this.institution) || this.overridden) {
      this.prmFacetCtrl.showPcAvailability = true;
    } else {
      this.prmFacetCtrl.showPcAvailability = false;
    }
  }

  get overridden() {
    return this.$location.search()['showExpand'] == true || this.$location.host().startsWith('primo-test');
  }
}

let HidePcAvailability = {
  require: { prmFacetCtrl: '^prmFacet' },
  controller: HidePcAvailabilityController,
};

HidePcAvailability.$inject = ['$location', '$window'];

export default HidePcAvailability;
