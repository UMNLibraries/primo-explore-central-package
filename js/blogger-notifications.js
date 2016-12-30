app.factory('bloggerNotifications', ['$mdToast', '$http', '$timeout', function($mdToast, $http, $timeout) {
  var svc = {};

  var showToast = function(msg) {
      $mdToast.show({
        controllerAs: 'ctrl',
        bindToController: true,
        autoWrap: false,
        position: 'start',
        hideDelay: 0,
        controller: ['$mdToast', function($mdToast) {
          this.msg = msg;
          this.close = function() {$mdToast.hide()};
        }],       
        template: `<md-toast class="blogger-notification">
                    <span class="md-toast-text" flex>{{ctrl.msg}}</span>
                    <md-button ng-click="ctrl.close()">Close<md-button>
                  </md-toast>`
                  
      }); 
  }; 

  svc.show = function(url) {
    var url = url + '?alt=json-in-script&callback=JSON_CALLBACK';
    $http.jsonp(url).success(function(data) {
      var entry = data.feed.entry;
      if (entry) {
        var title = entry[0].title.$t;
        var content = entry[0].content.$t;
        showToast(title + ': ' + content);
      }  
    });
  }  

  return svc;

}]);

app.run(['bloggerNotifications', function(bloggerNotifications) {
  var bloggerUrl = 'https://umnprimonotifications.blogspot.com/feeds/posts/default';
  bloggerNotifications.show(bloggerUrl);
}]);
