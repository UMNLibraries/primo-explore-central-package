import CustomTiles from './custom-tiles/custom-tiles.module';
import PrmLoansOverviewAfter from './loans-overview/prm-loans-overview-after.component';
import PrmFinesOverviewAfter from './fines-overview/prm-fines-overview-after.component';

export default angular
  .module('accountOverview', [
    CustomTiles
  ]) 
  .component('prmLoansOverviewAfter', PrmLoansOverviewAfter)
  .component('prmFinesOverviewAfter', PrmFinesOverviewAfter)
  .name;
