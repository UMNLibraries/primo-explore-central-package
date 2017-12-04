import Actions from './actions/actions.module';
import Facet from './facet/facet.module';
import FullView from './full-view/full-view.module';
import SearchBar from './search-bar/search-bar.module';
import SearchResult from './search-result/search-result.module';
import Topbar from './topbar/topbar.module';

export default angular
  .module('search', [
    Actions,
    Facet,
    FullView,
    SearchBar,
    SearchResult,
    Topbar,
  ])
  .name;