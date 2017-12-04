import ChangeAlmaSkin from './change-alma-skin.component';
import PrmFullViewServiceContainerAfter from './prm-full-view-service-container-after.component';

export default angular
  .module('fullViewServiceContainer', [])
  .component('changeAlmaSkin', ChangeAlmaSkin)
  .component('prmFullViewServiceContainerAfter', PrmFullViewServiceContainerAfter)
  .name;