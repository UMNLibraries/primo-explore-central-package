import GoogleAnalytics from './google-analytics/google-analytics.module';
import BloggerNotifications from './blogger-notifications/blogger-notifications.module';
import Redirect from './redirect/redirect.module';
import AlmaIframeMessenger from './alma-iframe-messenger/alma-iframe-messenger.module';
import Components from './components/components.module';

angular.module('centralCustom', [ 
  GoogleAnalytics, 
  BloggerNotifications,
  Redirect,
  AlmaIframeMessenger,
  Components,
]);

