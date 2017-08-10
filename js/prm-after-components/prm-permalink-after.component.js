class PrmPermalinkAfterController {

  $onInit() {
    this.permalinkUpdated = false;
  }

  $doCheck() {
    if (!this.permalinkUpdated) {
      if (this.permalink) this.updatePermalink();
    }
  }

  get permalink() {
    return this.parentCtrl.permalink;
  }

  set permalink(value) {
    this.parentCtrl.permalink = value;
  }

  updatePermalink() {
    this.permalink = this.permalink.replace('&isFrbr=true', '');
    this.permalinkUpdated = true;
  } 

}

export default {
  bindings: {parentCtrl: '<'},
  controller: PrmPermalinkAfterController
};