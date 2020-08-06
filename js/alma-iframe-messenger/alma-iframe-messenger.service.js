/**
 * Handles cross-origin postMessage communication with the Alma delivery iframe.
 */
class AlmaIframeMessenger {

  constructor($window) {
    this.$window = $window;
    this.campus = $window.appConfig['primo-view']['institution']['institution-code'];
  }

  init() {
    this.$window.addEventListener('message', event => {
      if (event.origin.endsWith('alma.exlibrisgroup.com') && event.data === 'getCampus') {
        event.source.postMessage(JSON.stringify({campus: this.campus}), event.origin);
      }
    });
  }
}

AlmaIframeMessenger.$inject = ['$window'];

export default AlmaIframeMessenger;