import template from './get-it-note.html';

class GetItNoteController {
  $onInit() {
    const vid = this.prmFullViewServiceContainerCtrl.configurationUtil.vid;
    const isGetIt = this.prmFullViewServiceContainerCtrl.isAlmaGetit();
    if (vid.startsWith('DULUTH') && isGetIt) {
      this.showDuluthNote = true;
    }
  }
}

let GetItNote = {
  require: { prmFullViewServiceContainerCtrl: '^prmFullViewServiceContainer' },
  controller: GetItNoteController,
  template: template,
};

export default GetItNote;
