import template from './ill-requests.html';

const MAX_REQUESTS_TO_DISPLAY = 3;

class IllRequestsController {
  constructor(illiad, $window) {
    this.illiad = illiad;
    this.$window = $window;
    this.maxDisplay = MAX_REQUESTS_TO_DISPLAY;
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
