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

const configure = (window, browzineConfig) => {
  window.browzine = {
    api: `https://public-api.thirdiron.com/public/v1/libraries/${browzineConfig.id}`,
    apiKey: browzineConfig.key,
    journalCoverImagesEnabled: true,
    journalBrowZineWebLinkTextEnabled: false,
    journalBrowZineWebLinkText: 'View Journal Contents',
    articleBrowZineWebLinkTextEnabled: false,
    articleBrowZineWebLinkText: 'View Issue Contents',
    articlePDFDownloadLinkEnabled: true,
    articlePDFDownloadLinkText: 'Download PDF',
    articleLinkEnabled: true,
    articleLinkText: 'Read Article',
    printRecordsIntegrationEnabled: true,
    unpaywallEmailAddressKey: 'almaprim@umn.edu',
    articlePDFDownloadViaUnpaywallEnabled: true,
    articlePDFDownloadViaUnpaywallText: 'Download Open Access PDF',
    articleLinkViaUnpaywallEnabled: true,
    articleLinkViaUnpaywallText: 'Read Open Access Article',
    articleAcceptedManuscriptPDFViaUnpaywallEnabled: true,
    articleAcceptedManuscriptPDFViaUnpaywallText:
      'Download Open Access PDF (Accepted Manuscript)',
    articleAcceptedManuscriptArticleLinkViaUnpaywallEnabled: true,
    articleAcceptedManuscriptArticleLinkViaUnpaywallText:
      'Read Open Access Article (Accepted Manuscript)',
  };
};

const loadScript = (window) => {
  const script = window.document.createElement('script');
  script.src =
    'https://s3.amazonaws.com/browzine-adapters/primo/browzine-primo-adapter.js';
  window.document.head.appendChild(script);
};

class BrowzineService {
  constructor($window, config) {
    this.$window = $window;
    this.config = config;
  }

  /**
   * To be called in the module's run block.
   */
  init() {
    configure(this.$window, this.config.browzine);
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

BrowzineService.$inject = ['$window', 'config'];

export default BrowzineService;
