import BloggerNotifications from './blogger-notifications.service.js';

export default angular
  .module('bloggerNotifications', [])
  .service('bloggerNotifications', BloggerNotifications)
  .run(['bloggerNotifications', (bloggerNotifications) => bloggerNotifications.show()])
  .name;


