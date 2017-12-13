import AccountOverview from './overview/account-overview.module';
import PrmAccountAfter from './prm-account-after.component';

export default angular
  .module('account', [
    AccountOverview
  ])
  .component('prmAccountAfter', PrmAccountAfter)
  .name;