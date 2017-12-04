import Account from './account/account.module';
import Search from './search/search.module';

export default angular
  .module('components', [
    Account,
    Search,
  ])
  .name;