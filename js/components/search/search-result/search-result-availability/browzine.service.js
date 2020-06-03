/* eslint-disable indent */
/**
 * An attempt to encapsulate the Browzine/LibKey integration. Vender instructions:
 * https://thirdiron.atlassian.net/wiki/spaces/BrowZineAPIDocs/pages/79200260/Ex+Libris+Primo+Integration
 *
 * "Encapsulate" is not the best term to use here, because the integration relies
 * on all sorts of shared global data and side effects. Here are some clues to
 * help future me reason about this:
 *
 * 1) adds a bunch of config data to the global window object
 * 2) asynchronously downloads a 3rd-party script, which reads & mutates
 *    the global config object
 * 3) passes a component's $scope (!) to the script (the script expects
 *    the $scope object to have a parentCtrl property, which is assumed
 *    to be a prmSearchResultAvailabilityLine controller instance)
 * 4) the 3rd-parry script then performs a bunch of AJAX requests and
 *    DOM manipulation
 */

const configure = (window) => {
  const institution =
    window.appConfig['primo-view']['institution']['institution-code'];

  const [id, apiKey] = (() => {
    switch (institution) {
      case 'TWINCITIES':
        return ['56', 'a17692c2-8e40-45b4-a83e-9152ab39ecbd'];
      case 'DULUTH':
        return ['2221', 'e71300f3-5817-4013-b828-7edc87f493e1'];
      case 'MORRIS':
        return ['2222', '61dab944-075d-4398-bfb7-d2c5cf09535a'];
      case 'CROOKSTON':
        return ['2223', '521fef68-181c-4f37-9a74-46661fc98abc'];
    }
  })();

  window.browzine = {
    api: `https://public-api.thirdiron.com/public/v1/libraries/${id}`,
    apiKey,
    journalCoverImagesEnabled: true,
    journalBrowZineWebLinkTextEnabled: true,
    journalBrowZineWebLinkText: 'View Journal Contents',
    articleBrowZineWebLinkTextEnabled: true,
    articleBrowZineWebLinkText: 'View Issue Contents',
    articlePDFDownloadLinkEnabled: true,
    articlePDFDownloadLinkText: 'Download PDF',
    articleLinkEnabled: true,
    articleLinkText: 'Read Article',
    printRecordsIntegrationEnabled: true,
    unpaywallEmailAddressKey: 'almaprim@umn.edu',
    articlePDFDownloadViaUnpaywallEnabled: true,
    articlePDFDownloadViaUnpaywallText: 'Download PDF (via Unpaywall)',
    articleLinkViaUnpaywallEnabled: true,
    articleLinkViaUnpaywallText: 'Read Article (via Unpaywall)',
    articleAcceptedManuscriptPDFViaUnpaywallEnabled: true,
    articleAcceptedManuscriptPDFViaUnpaywallText:
      'Download PDF (Accepted Manuscript via Unpaywall)',
    articleAcceptedManuscriptArticleLinkViaUnpaywallEnabled: true,
    articleAcceptedManuscriptArticleLinkViaUnpaywallText:
      'Read Article (Accepted Manuscript via Unpaywall)',
  };
};

const loadScript = (window) => {
  const script = window.document.createElement('script');
  script.src =
    'https://s3.amazonaws.com/browzine-adapters/primo/browzine-primo-adapter.js';
  window.document.head.appendChild(script);
};

class BrowzineService {
  constructor($window) {
    this.$window = $window;
  }

  /**
   * To be called in the module's run block.
   */
  init() {
    configure(this.$window);
    loadScript(this.$window);
  }

  /**
   * This is where the Browzine/LibKey integration does its magic.
   *
   * @param {Object} scope - An AngularJS $scope object. The scope is assumed
   * to belong to a PrmSearchAvailabilityLineAfter component, with a parentCtrl
   * property.
   */
  handleSearchResult(scope) {
    this.$window.browzine.primo.searchResult(scope);
  }
}

BrowzineService.$inject = ['$window'];

export default BrowzineService;
