import HathiTrustAvailability from 'primo-explore-hathitrust-availability'
import ChangeAlmaSkin from './change-alma-skin.component'
import PubmedLinkFix from './pubmeb-fix.component'
import HidePcAvailability from './hide-pc-availability.component'
import IllAccountLink from './ill-account-link.componnent'

export default angular
  .module('prmAfterComponents', [
    HathiTrustAvailability
  ]) 
  .component('pubmedLinkFix', PubmedLinkFix)
  .component('hidePcAvailability', HidePcAvailability)
  .component('changeAlmaSkin', ChangeAlmaSkin)
  .component('illAccountLink', IllAccountLink)
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
  .component('prmLinkedUserSelectorAfter', {
    template: '<ill-account-link></ill-account-link>'
  })
  .name;

