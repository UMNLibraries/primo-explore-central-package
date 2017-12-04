import HathiTrustAvailability from 'primo-explore-hathitrust-availability';
import PrmSearchResultListAfter from './search-result-list/prm-search-result-list-after.component';
import PrmSearchResultAvailabilityLineAfter from './search-result-availability/prm-search-result-availability-line-after.component';

export default angular
  .module('searchResult', [
    HathiTrustAvailability,
  ])
  .component('prmSearchResultListAfter', PrmSearchResultListAfter)
  .component('prmSearchResultAvailabilityLineAfter', PrmSearchResultAvailabilityLineAfter)
  .name;