import template from './prm-loans-overview-after.html';

class PrmLoansOverviewAfter {
  constructor(config) {
    this.config = config;
  }

  get enableIlliad() {
    return this.config.enableIlliad;
  }
}

PrmLoansOverviewAfter.$inject = ['config'];

export default {
  controller: PrmLoansOverviewAfter,
  template: template,
};
