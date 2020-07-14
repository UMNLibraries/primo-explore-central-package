import ILLiad from './illiad.service.js';
import IllRequests from './ill-requests/ill-requests.component';

export default angular
  .module('ill', [])
  .service('illiad', ILLiad)
  .component('illRequests', IllRequests)
  .name;