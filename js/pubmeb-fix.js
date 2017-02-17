
function lookupOtool() {
  let inst = window.appConfig['primo-view']['institution']['institution-code'];
  let otools = {
    TWINCITIES: "umnbmlib",
    DULUTH: "umndlib",
    CROOKSTON: "mnumclib"
  }
  return otools[inst] || null;
}

function isPubmedUrl(url) {
  return /pubmed.gov\/\d+$/.test(url);
}

function fixPubmedLinks(links) {
  let otool = lookupOtool();
  for (let i=0; i < links.length; i++) {
    if (otool && isPubmedUrl(links[i].linkURL)) {
      links[i].linkURL += "?otool=" + otool;
    }
  }
}

export let PubmedLinkFix = {
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

