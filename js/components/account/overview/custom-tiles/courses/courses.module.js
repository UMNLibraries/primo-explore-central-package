import Courses from './courses.component';
import CoursesService from './courses.service';

export default angular
  .module('courses', [])
  .component('courses', Courses)
  .service('courses', CoursesService)
  .name;