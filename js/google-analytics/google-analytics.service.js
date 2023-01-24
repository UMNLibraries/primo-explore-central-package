const PROD_HOST_PATTERN = /^(primo.lib|prime2.oit|umn-almaprimo.hosted).*/;
const PROD_TRACKING_ID = 'UA-20973358-32';
const STAGE_TRACKING_ID = 'UA-20973358-29';

function _loadAnalytics(window) {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,window.document,'script','https://www.google-analytics.com/analytics.js','ga');
}
 
class GoogleAnalytics {

  constructor($rootScope, $location, $window) {
    this.$rootScope = $rootScope;
    this.$location = $location; 
    this.$window = $window;

    _loadAnalytics(this.$window);
    this.$window.ga('create', this.trackingId);
    this.$window.ga('set', 'anonymizeIp', true);
    
    if (this.campusDim) {
      this.$window.ga('set', 'dimension1', this.campusDim);
    }
  }

  get trackingId() {
    if (PROD_HOST_PATTERN.test(this.$location.host())) {
      return PROD_TRACKING_ID;
    } else {
      return STAGE_TRACKING_ID;
    }
  }

  get campusDim() {
    let campus = null;
    let view = (this.$location.search().vid || '');
    if (/^(twincities|duluth|morris|crookston)(_sp)?$/i.test(view)) {
      campus = view.toLowerCase().replace(/_sp$/, '');
    }
    return campus;
  }

  trackPageviews() {
    this.$rootScope.$on('$locationChangeSuccess', (event, newUrl, oldUrl) => {
      this.$window.ga('send', 'pageview', {location: newUrl});
    });
  }

  trackEvent(category, action, label) {
    this.$window.ga('send', 'event', category, action, label);
  }

}

GoogleAnalytics.$inject = ['$rootScope', '$location', '$window'];

export default GoogleAnalytics;