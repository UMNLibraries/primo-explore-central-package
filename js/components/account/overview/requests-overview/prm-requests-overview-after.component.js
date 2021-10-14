import template from './prm-requests-overview-after.html';
import CampusCode from '../../../../config/campus-code';

class PrmRequestsOverviewAfter {
  constructor(config) {
    this.config = config;
  }

  get enableIlliad() {
    return this.config.enableIlliad;
  }

  get showIllLink() {
    return (
      !this.config.enableIlliad &&
      this.config.institution == CampusCode.TWINCITIES
    );
  }
}

PrmRequestsOverviewAfter.$inject = ['config'];

export default {
  controller: PrmRequestsOverviewAfter,
  template: template,
};
