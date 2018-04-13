import template from './ill.html';

class IllOverview {
  constructor($window) {
    this.institution = $window.appConfig['primo-view']['institution']['institution-code'];
  }

  get illAccountLink() {
    if (this.institution === 'TWINCITIES') {
      return 'http://ezproxy.lib.umn.edu/login?qurl=https%3A%2F%2Fumn.illiad.oclc.org%2Filliad%2FILLiad.dll';
    } else
      return null;
  }

}

IllOverview.$inject = ['$window'];

export default {
  controller: IllOverview,
  template: template
};