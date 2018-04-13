import Courses from './courses/courses.module';
import Ill from './ill/ill.component';
import InjectCustomTiles from './inject-custom-tiles.component';

export default angular
  .module('customTiles', [
    Courses
  ])
  .component('customTiles', InjectCustomTiles)
  .component('ill', Ill)
  .name;