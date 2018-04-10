class Courses {
  constructor(url, $http, $q) {
    this.url = url;
    this.$http = $http;
    this.$q = $q;
  }

  // TODO: add cache 
  getCourses() {
    let deferred = this.$q.defer();
    this.$http.get(this.url, {withCredentials: true})
      .then(resp => deferred.resolve(resp.data))
      .catch(error => console.log(error));
    return deferred.promise;
  }
}

Courses.$inject = ['coursesUrl', '$http', '$q'];

export default Courses;