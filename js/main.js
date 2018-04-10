import ShibAuth from './shib-auth/shib-auth.module';
import Courses from './courses/courses.module';

import GoogleAnalytics from './google-analytics/google-analytics.module';
import BloggerNotifications from './blogger-notifications/blogger-notifications.module';
import Redirect from './redirect/redirect.module';
import Components from './components/components.module';

angular.module('centralCustom', [ 
  ShibAuth,
  Courses,
  GoogleAnalytics, 
  BloggerNotifications,
  Redirect,
  Components,
]);

