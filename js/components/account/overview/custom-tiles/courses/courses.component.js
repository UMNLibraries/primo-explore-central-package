import template from './courses.html';

class CoursesController {
  constructor(coursesService) {
    this.coursesService = coursesService;
    this.courses = [];
  }

  loadCourses() {
    this.loading = true;
    this.coursesService.getCourses()
      .then(courses => this.courses = courses)
      .finally(() => (this.loading = false));
  }

  hasCourses() {
    return (Array.isArray(this.courses) && this.courses.length > 0);
  }
}

CoursesController.$inject = ['courses'];

export default {
  controller: CoursesController,
  template: template
};


