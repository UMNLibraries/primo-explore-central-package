import FullViewServiceContainer from './full-view-service-container/full-view-service-container.module';
import Links from './links/links.module';
import GetIt from './get-it/get-it.module';

export default angular.module('fullView', [
  FullViewServiceContainer,
  Links,
  GetIt,
]).name;
