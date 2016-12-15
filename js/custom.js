(function(){
"use strict";
'use strict';

var app = angular.module('centralCustom', ['angularLoad']);

app.run(['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
  })($window, $window.document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

  var isProd = function isProd() {
    return (/^(primo.lib|prime2.oit|umn-almaprimo.hosted).*/.test($location.host())
    );
  };

  var trackingId;

  if (isProd()) {
    trackingId = 'UA-20973358-32';
  } else {
    trackingId = 'UA-20973358-29';
  }

  $window.ga('create', trackingId, 'auto');
  $window.ga('set', 'anonymizeIp', true);

  var view = $location.search().vid || '';
  if (/^(twincities|duluth|morris|crookston)(_sp)?$/i.test(view)) {
    var campus = view.toLowerCase().replace(/_sp$/, '');
    $window.ga('set', 'dimension1', campus);
  }

  $rootScope.$on('$locationChangeSuccess', function (event) {
    $window.ga('send', 'pageview', { location: $location.url() });
  });
}]);

app.component('prmSearchResultAvailabilityLineAfter', {
  bindings: { parentCtrl: '<' },
  template: '<hathi-trust-availability hide-online="true"></hathi-trust-availability>'
});

app.component('prmServiceLinksAfter', {
  bindings: { parentCtrl: '<' },
  template: '<pubmed-fix></pubmed-fix>'
});

app.controller('pubmedFixController', ['$location', function ($location) {
  var self = this;

  var otoolMap = {
    TWINCITIES: "umnbmlib",
    DULUTH: "umndlib",
    CROOKSTON: "mnumclib" };
  var view = $location.search().vid || '';
  var otool = otoolMap[view];

  var isPubmedUrl = function isPubmedUrl(url) {
    return (/pubmed.gov\/\d+$/.test(url)
    );
  };

  self.$onInit = function () {
    self.parentCtrl = this.parent.parentCtrl;
    var links = self.parentCtrl.recordLinks;
    for (var i = 0; i < links.length; i++) {
      if (otool && isPubmedUrl(links[i].linkURL)) {
        links[i].linkURL += "?otool=" + otool;
      }
    }
  };
}]);

app.component('pubmedFix', {
  require: {
    parent: '^prmServiceLinksAfter'
  },
  controller: 'pubmedFixController'
});

app.controller('hathiTrustAvailabilityController', ['hathiTrust', function (hathiTrust) {
  var self = this;

  self.$onInit = function () {
    self.parentCtrl = this.parent.parentCtrl;
    setDefaults();
    if (!(isOnline() && self.hideOnline)) {
      updateHathiTrustAvailability();
    }
  };

  var setDefaults = function setDefaults() {
    if (!self.msg) self.msg = 'Full Text Available at HathiTrust';
  };

  var isOnline = function isOnline() {
    return self.parentCtrl.result.delivery.GetIt1.some(function (g) {
      return g.links.some(function (l) {
        return l.isLinktoOnline;
      });
    });
  };

  var updateHathiTrustAvailability = function updateHathiTrustAvailability() {
    var hathiTrustIds = (self.parentCtrl.result.pnx.addata.oclcid || []).map(function (id) {
      return "oclc:" + id;
    });
    hathiTrust.findFullViewRecord(hathiTrustIds).then(function (res) {
      self.fullTextLink = res;
    });
  };
}]);

app.component('hathiTrustAvailability', {
  require: {
    parent: '^prmSearchResultAvailabilityLineAfter'
  },
  bindings: {
    hideOnline: '<',
    msg: '@?'
  },
  controller: 'hathiTrustAvailabilityController',
  template: '<span class="umnHathiTrustLink">\
              <a target="_blank" ng-if="$ctrl.fullTextLink" ng-href="{{$ctrl.fullTextLink}}">\
              {{$ctrl.msg}}\
                <prm-icon external-link="" icon-type="svg" svg-icon-set="primo-ui" icon-definition="open-in-new"></prm-icon>\
              </a>\
            </span>'

});

app.factory('hathiTrust', ['$http', '$q', function ($http, $q) {
  var svc = {};
  var hathiTrustBaseUrl = "https://catalog.hathitrust.org/api/volumes/brief/json/";

  svc.findFullViewRecord = function (ids) {
    var deferred = $q.defer();

    var handleResponse = function handleResponse(data) {
      var fullTextUrl = null;
      for (var i = 0; !fullTextUrl && i < ids.length; i++) {
        var result = data[ids[i]];
        for (var j = 0; j < result.items.length; j++) {
          var item = result.items[j];
          if (item.usRightsString.toLowerCase() === "full view") {
            fullTextUrl = result.records[item.fromRecord].recordURL;
            break;
          }
        }
      }
      deferred.resolve(fullTextUrl);
    };

    if (ids.length) {
      var hathiTrustLookupUrl = hathiTrustBaseUrl + ids.join('|') + "?callback=JSON_CALLBACK";
      $http.jsonp(hathiTrustLookupUrl, { cache: true }).success(handleResponse);
    } else {
      deferred.resolve(null);
    }

    return deferred.promise;
  };

  return svc;
}]);
})();