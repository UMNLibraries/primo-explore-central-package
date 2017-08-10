class HidePcAvailabilityController {
  constructor($location) {
    this.$location = $location;
  }

  $onInit() {
    if (this.$location.search()['showExpand'] !== 'true') {
      this.prmFacetCtrl.showPcAvailability = false;
    }
  }
}

let HidePcAvailability = {
  require: {prmFacetCtrl: '^prmFacet'},
  controller: HidePcAvailabilityController
};

HidePcAvailability.$inject = ['$location'];

export default HidePcAvailability;
