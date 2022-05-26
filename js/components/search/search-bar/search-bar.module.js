import PrmSearchBarAfter from './prm-search-bar-after.component';
import PrmAdvancedSearchAfter from './prm-advanced-search-after.component';
import UncollapseAdvancedSearch from './uncollapse-advanced-search.component';

export default angular
  .module('searchBar', [])
  .component('prmSearchBarAfter', PrmSearchBarAfter)
  .component('prmAdvancedSearchAfter', PrmAdvancedSearchAfter)
  .component('uncollapseAdvancedSearch', UncollapseAdvancedSearch)
  .name;