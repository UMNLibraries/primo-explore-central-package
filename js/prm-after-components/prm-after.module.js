import HathiTrustAvailability from 'primo-explore-hathitrust-availability';
import ChangeAlmaSkin from './change-alma-skin.component';
import PubmedLinkFix from './pubmeb-fix.component';
import HidePcAvailability from './hide-pc-availability.component';
import PrmLogoAfter from './prm-logo-after.component';
import PrmLoansOverviewAfter from './prm-loans-overview-after.component';
import PrmSearchResultListAfter from './prm-search-result-list-after.component';
import PrmUserAreaAfter from './prm-user-area-after.component';
import PrmSearchBookMarkmarkFilterAfter from './prm-search-bookmark-filter-after.component';
import PrmSearchBarAfter from './prm-search-bar-after.component';

export default angular
  .module('prmAfterComponents', [
    HathiTrustAvailability,
  ]) 
  .component('pubmedLinkFix', PubmedLinkFix)
  .component('hidePcAvailability', HidePcAvailability)
  .component('changeAlmaSkin', ChangeAlmaSkin)
  .component('prmLogoAfter', PrmLogoAfter)
  .component('prmLoansOverviewAfter', PrmLoansOverviewAfter)
  .component('prmSearchResultListAfter', PrmSearchResultListAfter)
  .component('prmUserAreaAfter', PrmUserAreaAfter)
  .component('prmSearchBookmarkFilterAfter', PrmSearchBookMarkmarkFilterAfter)
  .component('prmSearchBarAfter', PrmSearchBarAfter)
  .component('prmServiceLinksAfter', {
    template: '<pubmed-link-fix></pubmed-link-fix>'
  })
  .component('prmSearchResultAvailabilityLineAfter', { 
    template: '<hathi-trust-availability hide-online=true></hathi-trust-availability>'
  })
  .component('prmFacetAfter', {
    template: '<hide-pc-availability></hide-pc-availability>'
  })
  .component('prmFullViewServiceContainerAfter', {
    template: '<change-alma-skin></remove-alma-skin>'
  })
  .name;
