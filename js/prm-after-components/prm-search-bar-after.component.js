class PrmSearchBarAfterController {
  $onInit() {
    if (this.parentCtrl.vid === 'TWINCITIES') this.parentCtrl.tabs = [];
  }
}

export default {
  bindings: {parentCtrl: '<'},
  controller: PrmSearchBarAfterController
};