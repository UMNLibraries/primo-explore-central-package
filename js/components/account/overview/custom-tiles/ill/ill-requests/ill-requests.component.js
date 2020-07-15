import template from './ill-requests.html';

// TODO: limit the number of requests / articles that display?

class IllRequestsController {
  constructor(illiad, $window) {
    this.illiad = illiad;
    this.$window = $window;
    this.requests = [];
  }

  hasRequests() {
    return Array.isArray(this.requests) && this.requests.length > 0;
  }

  loadRequests() {
    this.loading = true;
    this.illiad
      .getRequests()
      .then((requests) => (this.requests = requests))
      .finally(() => (this.loading = false));
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
