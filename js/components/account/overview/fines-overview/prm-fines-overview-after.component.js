import template from './prm-fines-overview-after.html';

class PrmFinesOverviewAfterController {
  constructor() {
    this.mentionReturns = true;
  }

  $onInit() {
    if (this.parentCtrl.configUtil.vid === 'MORRIS') {
      this.mentionReturns = false;
    }
  }

}

export default {
  template: template,
  bindings: {parentCtrl: '<'},
  controller: PrmFinesOverviewAfterController
};