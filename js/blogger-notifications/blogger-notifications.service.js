const BASE_URL = 'https://umnprimonotifications.blogspot.com/feeds/posts/default';

class BloggerNotifications {

  constructor($mdToast, $http, $document) {
    this._$mdToast = $mdToast;
    this._$http = $http;
    this._$document = $document;
    this.url = BASE_URL + '?alt=json-in-script&callback=JSON_CALLBACK';
  }

  _showToast(msg) {
    this._$mdToast.show({
      controllerAs: 'ctrl',
      bindToController: true,
      autoWrap: false,
      position: 'top',
      parent: this._$document[0].getElementsByTagName('html')[0],
      hideDelay: 10000,
      locals: {
        $mdToast: this._$mdToast, 
        msg: msg
      },
      controller: class {
        close() {
          this.$mdToast.hide()
        };
      },       
      template: `<md-toast class="blogger-notification">
                  <span class="md-toast-text" flex>{{ctrl.msg}}</span>
                  <!--<md-button ng-click="ctrl.close()">Close<md-button>-->
                </md-toast>`
                
    }); 
  }

  show() {
    this._$http.jsonp(this.url).success(data => {
      let entry = data.feed.entry;
      if (entry) {
        let title = entry[0].title.$t;
        let content = entry[0].content.$t;
        this._showToast(title + ': ' + content);
      }  
    });
  }  

}

BloggerNotifications.$inject = ['$mdToast', '$http', '$document'];

export default BloggerNotifications;

