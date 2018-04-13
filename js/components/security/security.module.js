import ShibAuth from './shib-auth/shib-auth.module';

export default angular
  .module('security', [
    ShibAuth
  ])
  .name;