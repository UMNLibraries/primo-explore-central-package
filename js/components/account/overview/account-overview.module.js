import PrmLoansOverviewAfter from './loans-overview/prm-loans-overview-after.component';
import PrmAccountOverviewAfter from './prm-account-overview-after.component';

export default angular
  .module('accountOverview', []) 
  .component('prmLoansOverviewAfter', PrmLoansOverviewAfter)
  .component('prmAccountOverviewAfter', PrmAccountOverviewAfter)
  /*
  .run(['$window', function($window){
    $window.addEventListener('message', e => console.log("MSG: " + e.data));
  }])
  */
  .name;
