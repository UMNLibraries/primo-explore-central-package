app.run(['$rootScope', '$location', '$window', function($rootScope, $location, $window){
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })($window,$window.document,'script','https://www.google-analytics.com/analytics.js','ga');

  var isProd = function() {
    return /^(primo.lib|prime2.oit|umn-almaprimo.hosted).*/.test($location.host());
  }

  var trackingId;

  if (isProd()) {
    trackingId = 'UA-20973358-32';
  } else {
    trackingId = 'UA-20973358-29';
  }

  $window.ga('create', trackingId, 'auto');
  $window.ga('set', 'anonymizeIp', true);

  var view = ($location.search().vid || '');
  if (/^(twincities|duluth|morris|crookston)(_sp)?$/i.test(view)) {
    var campus = view.toLowerCase().replace(/_sp$/, '');
    $window.ga('set', 'dimension1', campus);
  }

  $rootScope.$on('$locationChangeSuccess', function(event){
    $window.ga('send', 'pageview', {location: $location.url()});
  });

}]);


