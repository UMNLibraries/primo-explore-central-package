import Account from './account/account.module';
import PrimoExplore from './primo-explore/primo-explore.module';
import Search from './search/search.module';

export default angular
  .module('components', [
    Account,
    PrimoExplore,
    Search,
  ])
  .name;