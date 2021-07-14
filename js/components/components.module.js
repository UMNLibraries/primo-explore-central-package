import Account from './account/account.module';
import PrimoExplore from './primo-explore/primo-explore.module';
import Search from './search/search.module';
import Security from './security/security.module';
import Icon from './icon/icon.module';
import CollectionDiscovery from './collection-discovery/collection-discovery.module';

export default angular
  .module('components', [
    Account,
    PrimoExplore,
    Search,
    Security,
    Icon,
    CollectionDiscovery,
  ])
  .name;