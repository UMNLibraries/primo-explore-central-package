import RedirectToMyAccount from './redirect-to-my-account.service';

export default angular
  .module('redirect', [])
  .service('redirectToMyAccount', RedirectToMyAccount)
  .run(['redirectToMyAccount', redirectToMyAccount => redirectToMyAccount.init()])
  .name;