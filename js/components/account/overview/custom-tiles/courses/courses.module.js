import Courses from './courses.component';
import CoursesService from './courses.service';
import Filter from '../../../../../filters/filters.module';

export default angular
  .module('courses', [Filter])
  .component('courses', Courses)
  .service('courses', CoursesService)
  .name;