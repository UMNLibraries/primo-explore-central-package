import {PubmedLinkFix} from './pubmeb-fix'
import {BloggerNotifications} from './blogger-notifications.js'

let app = angular.module('centralCustom', ['angularLoad']);

app.component('pubmedLinkFix', PubmedLinkFix);
app.component('prmServiceLinksAfter', {
  template: '<pubmed-link-fix></pubmed-link-fix>'
});

app.service('BloggerNotifications', BloggerNotifications);


app.run(['BloggerNotifications', function(bloggerNotifications) {
  var bloggerUrl = 'https://umnprimonotifications.blogspot.com/feeds/posts/default';
  console.log(bloggerNotifications);
  bloggerNotifications.show(bloggerUrl);
}]);

