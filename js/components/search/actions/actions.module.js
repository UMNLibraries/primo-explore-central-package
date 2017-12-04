import UpdatePermalink from './permalink-action/update-permalink.component';
import PrmPermalinkAfter from './permalink-action/prm-permalink-after.component';

export default angular
  .module('actions', [])
  .component('updatePermalink', UpdatePermalink)
  .component('prmPermalinkAfter', PrmPermalinkAfter)
  .name;