class PrmGalleryCollectionAfter {
  constructor(config) {
    this.config = config;
  }

  get belongsToInstitution() {
    return this.config.institutionLibraryCodes.includes(
      this.parentCtrl.collection.library.value
    );
  }

  get isGalleryLobby() {
    return this.parentCtrl.isGalleryLobby;
  }

  $onInit() {
    if (this.isGalleryLobby && !this.belongsToInstitution) {
      console.debug(
        'Removing collection that does not belong to this institution: ',
        this.parentCtrl.collection
      );
      this.parentCtrl.$element.remove();
    }
  }
}

PrmGalleryCollectionAfter.$inject = ['config'];

export default {
  bindings: { parentCtrl: '<' },
  controller: PrmGalleryCollectionAfter,
};
