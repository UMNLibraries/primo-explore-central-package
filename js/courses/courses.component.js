import template from './courses.html';

class CoursesController {
  
  constructor(coursesService) {
    this.coursesService = coursesService;
    this.courses = '';
  }

  loadCourses() {
    console.log("GOT IT!");
    //this.courses = "MY COURSE LIST...";
    this.coursesService.getCourses()
      .then(courses => this.courses = courses);
  }
}

CoursesController.$inject = ['courses'];

export default {
  controller: CoursesController,
  template: template
};


