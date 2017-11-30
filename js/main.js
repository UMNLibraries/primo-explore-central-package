import GoogleAnalytics from './google-analytics/google-analytics.module';
import PrmAfterComponents from './prm-after-components/prm-after.module';
import BloggerNotifications from './blogger-notifications/blogger-notifications.module';
import Redirect from './redirect/redirect.module';
import Account from './account/account.module';

angular.module('centralCustom', [ 
  PrmAfterComponents, 
  GoogleAnalytics, 
  BloggerNotifications,
  Redirect,
  Account,
]);
