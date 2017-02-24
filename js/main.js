import 'primo-explore-hathitrust-availability'
import './google-analytics'
import './blogger-notifications'
import RemoveAlmaSkin from './remove-alma-skin.js'
import PubmedLinkFix from './pubmeb-fix'

const REQUIRED_MODULES = [ 'angularLoad', 
                           'hathiTrustAvailability', 
                           'googleAnalytics', 
                           'bloggerNotifications' ];

angular
  .module('centralCustom', REQUIRED_MODULES)
  .component('pubmedLinkFix', PubmedLinkFix)
  .component('prmServiceLinksAfter', {
    template: '<pubmed-link-fix></pubmed-link-fix>'
  })
  .component('prmSearchResultAvailabilityLineAfter', { 
    template: '<hathi-trust-availability hide-online=true></hathi-trust-availability>'
  })
  .component('removeAlmaSkin', RemoveAlmaSkin)
  .component('prmFullViewServiceContainerAfter', {
    template: '<remove-alma-skin></remove-alma-skin>'
  });

