import Redirect from './redirect.service';

export default angular
  .module('redirect', [])
  .service('redirect', Redirect)
  .run(['redirect', redirect => redirect.init()])
  .name;