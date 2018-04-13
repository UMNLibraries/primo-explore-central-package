import GoogleAnalytics from './google-analytics/google-analytics.module';
import BloggerNotifications from './blogger-notifications/blogger-notifications.module';
import Redirect from './redirect/redirect.module';
import Components from './components/components.module';

angular.module('centralCustom', [ 
  GoogleAnalytics, 
  BloggerNotifications,
  Redirect,
  Components,
]);

