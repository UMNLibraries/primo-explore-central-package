import ChangeAlmaSkin from './change-alma-skin.component';
import GetItNote from './get-it-note.component';
import PrmFullViewServiceContainerAfter from './prm-full-view-service-container-after.component';

export default angular
  .module('fullViewServiceContainer', [])
  .component('changeAlmaSkin', ChangeAlmaSkin)
  .component('getItNote', GetItNote)
  .component('prmFullViewServiceContainerAfter', PrmFullViewServiceContainerAfter)
  .name;