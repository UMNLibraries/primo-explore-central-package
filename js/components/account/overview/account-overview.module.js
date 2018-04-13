import CustomTiles from './custom-tiles/custom-tiles.module';
import PrmLoansOverviewAfter from './loans-overview/prm-loans-overview-after.component';
import PrmAccountOverviewAfter from './prm-account-overview-after.component';

export default angular
  .module('accountOverview', [
    CustomTiles
  ]) 
  .component('prmLoansOverviewAfter', PrmLoansOverviewAfter)
  .component('prmAccountOverviewAfter', PrmAccountOverviewAfter)
  .name;
