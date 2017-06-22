import HathiTrustAvailability from 'primo-explore-hathitrust-availability';
import ChangeAlmaSkin from './change-alma-skin.component';
import PubmedLinkFix from './pubmeb-fix.component';
import HidePcAvailability from './hide-pc-availability.component';
import PrmLogoAfter from './prm-logo-after.component';
import InjectIllAccountOverview from './inject-ill-account-overview.component';

export default angular
  .module('prmAfterComponents', [
    HathiTrustAvailability,
  ]) 
  .component('pubmedLinkFix', PubmedLinkFix)
  .component('hidePcAvailability', HidePcAvailability)
  .component('changeAlmaSkin', ChangeAlmaSkin)
  .component('prmLogoAfter', PrmLogoAfter)
  .component('injectIllAccountOverview', InjectIllAccountOverview)
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
  .component('prmAccountOverviewAfter', {
    template: '<inject-ill-account-overview>'
  })
  .name;
