import notificationTemplate from './blogger-notification.html';

class BloggerNotifications {

  constructor($mdToast, $http, $document, bloggerBaseUrl, $cookies) {
    this._$mdToast = $mdToast;
    this._$http = $http;
    this._$document = $document;
    this._$cookies = $cookies;
    this.url = `${bloggerBaseUrl}/feeds/posts/default?alt=json-in-script`;
  }

  _showToast(msg) {
    this._$mdToast.show({
      controllerAs: 'ctrl',
      bindToController: true,
      autoWrap: false,
      position: 'top',
      parent: this._$document[0].getElementsByTagName('html')[0],
      hideDelay: 20000,
      locals: {
        $mdToast: this._$mdToast, 
        notificationService: this,
        msg: msg
      },
      controller: class {
        close() {
          this.$mdToast.hide();
          // eslint-disable-next-line no-undef
          notificationService._markNotificationAsRead();
        }
      },       
      template: notificationTemplate
    }); 
  }

  _markNotificationAsRead() {
    let cookieName = `unmnotification_${this.notificationTimestamp}`;
    let expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 1);
    this._$cookies.put(cookieName, '1', {expires: expireDate});
  }

  _notificationIsUnread() {
    let cookieName = `unmnotification_${this.notificationTimestamp}`;
    return (this._$cookies.get(cookieName) !== '1');
  }

  show() {
    this._$http.jsonp(this.url, {jsonpCallbackParam: 'callback'}).then(resp => {
      let entry = resp.data.feed.entry;
      if (entry) {
        let title = entry[0].title.$t;
        let content = entry[0].content.$t;
        this.notificationTimestamp = entry[0].updated.$t;
        if (this._notificationIsUnread()) {
          this._showToast(title + ': ' + content);
        }
      }  
    });
  }  

}

BloggerNotifications.$inject = ['$mdToast', '$http', '$document', 'bloggerBaseUrl', '$cookies'];

export default BloggerNotifications;

