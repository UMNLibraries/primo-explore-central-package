import Account from './account/account.module';
import PrimoExplore from './primo-explore/primo-explore.module';
import Search from './search/search.module';
import Security from './security/security.module';

export default angular
  .module('components', [
    Account,
    PrimoExplore,
    Search,
    Security,
  ])
  .name;