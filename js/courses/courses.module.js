import Courses from './courses.component';
import CoursesService from './courses.service';

const URL = 'https://stacksdev.lib.umn.edu/userapi/current-user/courses';

export default angular
  .module('courses', [])
  .constant('coursesUrl', URL)
  .component('courses', Courses)
  .service('courses', CoursesService)
  .name;