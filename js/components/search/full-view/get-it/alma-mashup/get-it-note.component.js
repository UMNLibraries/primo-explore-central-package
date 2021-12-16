import template from './get-it-note.html';

class GetItNoteController {
  constructor(config) {
    this.note = config.getItNote;
  }

  get showNote() {
    return this.note && this.prmFullViewServiceContainerCtrl.isAlmaGetit();
  }
}

GetItNoteController.$inject = ['config'];

const GetItNote = {
  require: { prmFullViewServiceContainerCtrl: '^prmFullViewServiceContainer' },
  controller: GetItNoteController,
  template: template,
};

export default GetItNote;
