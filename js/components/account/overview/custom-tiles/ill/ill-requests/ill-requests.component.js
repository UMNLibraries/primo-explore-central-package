import template from './ill-requests.html';

class IllRequestsController {
  constructor(illiad, $window) {
    this.illiad = illiad;
    this.$window = $window;
    this.requests = [];
  }

  $onInit() {
    this.inProgress = true;
  }

  hasRequests() {
    return Array.isArray(this.requests) && this.requests.length > 0;
  }

  loadRequests() {
    this.illiad
      .getRequests()
      .then((requests) => (this.requests = requests))
      .finally(() => (this.inProgress = false));
  }

  goToRequestPage(txnNum) {
    this.$window.location.href = this.illiad.getRequestPageUrl(txnNum);
  }
}

IllRequestsController.$inject = ['illiad', '$window'];

export default {
  controller: IllRequestsController,
  template: template,
};
