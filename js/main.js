import {PubmedLinkFix} from './pubmeb-fix'

let app = angular.module('centralCustom', ['angularLoad']);

app.component('pubmedLinkFix', PubmedLinkFix);
app.component('prmServiceLinksAfter', {
  template: '<pubmed-link-fix></pubmed-link-fix>'
});

