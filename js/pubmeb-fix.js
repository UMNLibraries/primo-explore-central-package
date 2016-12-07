app.controller('pubmedFixController', ['$location', function($location){
  var self = this;

  var otoolMap = {
    TWINCITIES: "umnbmlib",
    DULUTH: "umndlib",
    CROOKSTON: "mnumclib"};
  var view = ($location.search().vid || '');
  var otool = otoolMap[view];

  var isPubmedUrl = function(url) {
    return /pubmed.gov\/\d+$/.test(url);
  }

  self.$onInit = function() {
    self.parentCtrl = this.parent.parentCtrl;
    var links = self.parentCtrl.recordLinks;
    for (var i=0; i < links.length; i++) {
      if (otool && isPubmedUrl(links[i].linkURL)) {
         links[i].linkURL += "?otool=" + otool;
      }
    }
  }

}]);

app.component('pubmedFix', {
  require: {
    parent: '^prmServiceLinksAfter'
  },
	controller: 'pubmedFixController'
});

