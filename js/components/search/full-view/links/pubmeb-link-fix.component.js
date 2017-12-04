const PROXY_PREFIX = 'http://login.ezproxy.lib.umn.edu/login?auth=shibboleth&url=';

function lookupOtool() {
  let inst = window.appConfig['primo-view']['institution']['institution-code'];
  let otools = {
    TWINCITIES: 'umnbmlib',
    DULUTH: 'umndlib',
    CROOKSTON: 'mnumclib'
  };
  return otools[inst] || null;
}

function isPubmedUrl(url) {
  return /pubmed.gov\/\d+$/.test(url);
}

function fixPubmedLinks(links) {
  let otool = lookupOtool();
  for (let i=0; i < links.length; i++) {
    let url = links[i].linkURL;
    if (otool && isPubmedUrl(url)) {
      if (url.startsWith(PROXY_PREFIX)) url = url.substring(PROXY_PREFIX.length); 
      url += '?otool=' + otool;
      links[i].linkURL = url;
    }
  }
}

let PubmedLinkFix = {
  require: {
    prmServiceLinks: '^prmServiceLinks'
  },
  controller: class PubmedFixController {
    $onInit() {
      let links = this.prmServiceLinks.recordLinks;
      fixPubmedLinks(links);
    }
  }
};

export default PubmedLinkFix;