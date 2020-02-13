import PrmSearchBookmarkFilterAfter from './bookmark-filter/prm-search-bookmark-filter-after.component';
import PrmSkipToAfter from './skip-to/prm-skip-to-after.component';

export default angular
  .module('topbar', [])
  .component('prmSearchBookmarkFilterAfter', PrmSearchBookmarkFilterAfter)
  .component('prmSkipToAfter', PrmSkipToAfter)
  .name;