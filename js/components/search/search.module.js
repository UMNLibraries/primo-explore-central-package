import Actions from './actions/actions.module';
import FullView from './full-view/full-view.module';
import SearchBar from './search-bar/search-bar.module';
import SearchResult from './search-result/search-result.module';
import Topbar from './topbar/topbar.module';

export default angular
  .module('search', [
    Actions,
    FullView,
    SearchBar,
    SearchResult,
    Topbar,
  ])
  .name;