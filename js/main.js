import './google-analytics'
import './blogger-notifications'
import PubmedLinkFix from './pubmeb-fix'

angular
  .module('centralCustom', ['angularLoad', 'googleAnalytics', 'bloggerNotifications'])
  .component('pubmedLinkFix', PubmedLinkFix)
  .component('prmServiceLinksAfter', {
    template: '<pubmed-link-fix></pubmed-link-fix>'
  });


