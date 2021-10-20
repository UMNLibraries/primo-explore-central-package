import browseApiInterceptor from './browse-api-interceptor';

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push(browseApiInterceptor);
}

export default angular.module('virtualBrowse', [])
  .config(config)
  .name;
