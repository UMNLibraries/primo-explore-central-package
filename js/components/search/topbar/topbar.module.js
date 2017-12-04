import PrmLogoAfter from './logo/prm-logo-after.component';
import PrmSearchBookmarkFilterAfter from './bookmark-filter/prm-search-bookmark-filter-after.component';

export default angular
  .module('topbar', [])
  .component('prmLogoAfter', PrmLogoAfter)
  .component('prmSearchBookmarkFilterAfter', PrmSearchBookmarkFilterAfter)
  .name;