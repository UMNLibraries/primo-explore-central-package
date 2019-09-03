import InvalidInstitution from './invalid-institution/invalid-institution.module';
import MyAccount from './my-account/my-account.module';

export default angular
  .module('redirect', [
    InvalidInstitution,
    MyAccount,
  ])
  .name;