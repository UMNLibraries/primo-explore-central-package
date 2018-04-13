class Courses {
  constructor($http, $q) {
    this.coursesUrl = 'https://stacks.lib.umn.edu/userapi/current-user/courses';
    this.$http = $http;
    this.$q = $q;
  }

  getCourses() {
    let deferred = this.$q.defer();
    this.$http.get(this.coursesUrl, {withCredentials: true, cache: true})
      .then(resp => deferred.resolve(this.mergeCourses(resp.data.courses)))
      .catch(error => console.log(error));
    return deferred.promise;
  }

  mergeCourses(courses) {
    return courses.student.concat(courses.instructor);
  }

}

Courses.$inject = ['$http', '$q'];

export default Courses;
