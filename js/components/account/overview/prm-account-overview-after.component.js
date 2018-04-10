import template from './prm-account-overview-after.html';

class PrmAccountOverviewAfterController {

  constructor($window) {
    this.$window = $window;
    //this.$window.addEventListener('message', e => console.log("MSG: " + e.data));
  }

  $onInit() {
  }

}

PrmAccountOverviewAfterController.$inject = ['$window'];

export default {
  contoller: PrmAccountOverviewAfterController,
  template: template
};