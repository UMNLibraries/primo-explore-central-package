/**
 * Wait for the `permalink` property on the prmPermalink controller to be populated.
 * Then, remove the FRBR parameter from prmPermalink.$ctrl.permalink. 
 */
class UpdatePermalinkController {
  $onInit() {
    this.permalinkUpdated = false;
  }

  $onChanges(changes) { 
    if (changes.permalink.currentValue && !this.permalinkUpdated){
      this.updatePermalink();
    }
  }

  updatePermalink() {
    this.permalinkCtrl.permalink = this.permalink.replace('&isFrbr=true', '');
    this.permalinkUpdated = true;
  } 

}

export default {
  bindings: {
    permalink: '<', 
    permalinkCtrl: '<'
  },
  controller: UpdatePermalinkController
};