import BloggerNotifications from './blogger-notifications.service.js';

runBlock.$inject = ['bloggerNotifications'];

function runBlock(bloggerNotifications) {
  bloggerNotifications.show();
}

export default angular
  .module('bloggerNotifications', [])
  .service('bloggerNotifications', BloggerNotifications)
  .run(runBlock)
  .name;


