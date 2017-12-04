import HidePcAvailability from './hide-pc-availability.component';
import PrmFacetAfter from './prm-facet-after.component';

export default angular
  .module('facet', [])
  .component('hidePcAvailability', HidePcAvailability)
  .component('prmFacetAfter', PrmFacetAfter)
  .name;