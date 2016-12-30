app.run(['googleAnalytics', function(googleAnalytics){

  googleAnalytics.initialize();
  googleAnalytics.trackPageviews();

}]);

app.factory('googleAnalytics', ['$rootScope', '$location', '$window', function($rootScope, $location, $window) {

  var svc = {}; 

  var getTrackingId = function() {
    var isProd = /^(primo.lib|prime2.oit|umn-almaprimo.hosted).*/.test($location.host());
    if (isProd) {
      return 'UA-20973358-32';
    } else {
      return 'UA-20973358-29';
    }
  }

  var setCampusDim = function() {
    var view = ($location.search().vid || '');
    if (/^(twincities|duluth|morris|crookston)(_sp)?$/i.test(view)) {
      var campus = view.toLowerCase().replace(/_sp$/, '');
      $window.ga('set', 'dimension1', campus);
    }
  }

  var loadGa = function() {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })($window,$window.document,'script','https://www.google-analytics.com/analytics.js','ga');
  }

  svc.initialize = function() {
    loadGa(); 
    $window.ga('create', getTrackingId(), 'auto');
    $window.ga('set', 'anonymizeIp', true);
    setCampusDim();
  }

  svc.trackPageviews = function() {
    $rootScope.$on('$locationChangeSuccess', function(event){
      $window.ga('send', 'pageview', {location: $location.url()});
    });
  }

  return svc;

}]);


