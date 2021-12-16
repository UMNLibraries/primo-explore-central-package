import PrmAlmaMashupAfter from './alma-mashup/prm-alma-mashup-after.component';
import GetItNote from './alma-mashup/get-it-note.component';

export default angular
  .module('getIt', [])
  .component('prmAlmaMashupAfter', PrmAlmaMashupAfter)
  .component('getItNote', GetItNote)
  .name;