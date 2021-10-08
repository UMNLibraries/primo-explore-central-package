const otools = {
  TWINCITIES: 'umnbmlib',
  DULUTH: 'umndlib',
  CROOKSTON: 'mnumclib',
};

/**
 * Appends an "outside tool" parameter PubMed URLs in the "links" section of
 * the full display page. More info on the outside tool can be found here:
 * https://www.ncbi.nlm.nih.gov/books/NBK3803/
 */
class PubmedLinkFixController {
  constructor(config) {
    this.config = config;
    this.otool = otools[config.institution] || null;
  }

  $onInit() {
    if (this.otool) this.fixPubmedLinks(this.prmServiceLinks.recordLinks);
  }

  isPubmedUrl(url) {
    return /(ncbi\.nlm\.nih\.gov|pubmed\.gov)/.test(url);
  }

  fixPubmedLinks(links) {
    for (let i = 0; i < links.length; i++) {
      let url = links[i].linkURL;
      if (this.isPubmedUrl(url)) {
        url += '?otool=' + this.otool;
        links[i].linkURL = url;
      }
    }
  }
}

PubmedLinkFixController.$inject = ['config'];

export default {
  require: {
    prmServiceLinks: '^prmServiceLinks',
  },
  controller: PubmedLinkFixController,
};
