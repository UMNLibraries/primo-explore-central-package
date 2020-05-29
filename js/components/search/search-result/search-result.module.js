import HathiTrustAvailability from 'primo-explore-hathitrust-availability';
import BrowzineService from './search-result-availability/browzine.service';
import BrowzineComponent from './search-result-availability/browzine.component';
import PrmSearchResultListAfter from './search-result-list/prm-search-result-list-after.component';
import PrmSearchResultAvailabilityLineAfter from './search-result-availability/prm-search-result-availability-line-after.component';

export default angular
  .module('searchResult', [
    HathiTrustAvailability,
  ])
  .service('browzineService', BrowzineService)
  .component('browzine', BrowzineComponent)
  .component('prmSearchResultListAfter', PrmSearchResultListAfter)
  .component('prmSearchResultAvailabilityLineAfter', PrmSearchResultAvailabilityLineAfter)
  .run(['browzineService', browzineService => browzineService.init()])
  .name;