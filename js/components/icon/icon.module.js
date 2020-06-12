import PrmIconAfter from './prm-icon-after.component';

export default angular
  .module('icon', [])
  .component('prmIconAfter', PrmIconAfter)
  .config(['$mdIconProvider', ($mdIconProvider) => {
    $mdIconProvider.iconSet('toggle', '/primo-explore/custom/CENTRAL_PACKAGE/img/svg-sprite-toggle.svg', 24);
  }])
  .name;