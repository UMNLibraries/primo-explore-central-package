import RedirectToMyAccount from './redirect-to-my-account.service';

export default angular
  .module('myAccount', [])
  .service('redirectToMyAccount', RedirectToMyAccount)
  .run(['redirectToMyAccount', redirectToMyAccount => redirectToMyAccount.init()])
  .name;