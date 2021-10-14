import template from './prm-requests-overview-after.html';

class PrmRequestsOverviewAfter {
  constructor(config) {
    this.config = config;
  }

  get enableIlliad() {
    return this.config.enableIlliad;
  }

  get showIllLink() {
    return this.config.showIllLink;
  }
}

PrmRequestsOverviewAfter.$inject = ['config'];

export default {
  controller: PrmRequestsOverviewAfter,
  template: template,
};
