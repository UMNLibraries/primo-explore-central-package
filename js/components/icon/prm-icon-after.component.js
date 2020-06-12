class PrmIconAfter {

  $onInit() {
    //TODO: update aria label properties (in BO???)

    if (this.parentCtrl.iconDefinition === 'prm_pin') {
      this.parentCtrl.svgIconSet = 'toggle';
      this.parentCtrl.iconDefinition = 'ic_star_border_24px';
    }
    if (this.parentCtrl.iconDefinition === 'prm_unpin') {
      this.parentCtrl.svgIconSet = 'toggle';
      this.parentCtrl.iconDefinition = 'ic_star_24px';
    }

  }
}

export default {
  controller: PrmIconAfter,
  bindings: { parentCtrl: '<' },
};
