import Courses from './courses/courses.module';
import Ill from './ill/ill.module';
import InjectCustomTiles from './inject-custom-tiles.component';

export default angular
  .module('customTiles', [
    Courses,
    Ill
  ])
  .component('customTiles', InjectCustomTiles)
  .name;