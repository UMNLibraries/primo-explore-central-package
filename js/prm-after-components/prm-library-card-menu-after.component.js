class PrmLibraryCardAfterController {
  constructor($location) {
    this.$location = $location; 
  }

  $onInit() {
    if (this.redirectRequested()) {
      this.parentCtrl.goToMyLibraryCard();
    }
  }

  redirectRequested() {
    return (this.$location.search()['redirect'] === 'myaccount');
  }
}

export default {
  bindings: {parentCtrl: '<'}, 
  controller: PrmLibraryCardAfterController
};