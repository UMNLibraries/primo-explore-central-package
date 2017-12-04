import FullViewServiceContainer from './full-view-service-container/full-view-service-container.module';
import Links from './links/links.module';

export default angular
  .module('fullView', [
    FullViewServiceContainer,
    Links
  ])
  .name;