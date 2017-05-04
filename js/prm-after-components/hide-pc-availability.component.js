class HidePcAvailabilityController {
  $onInit() {
    this.prmFacetCtrl.showPcAvailability = false;
  }
}

let HidePcAvailability = {
  require: {prmFacetCtrl: '^prmFacet'},
  controller: HidePcAvailabilityController
}

export default HidePcAvailability;
