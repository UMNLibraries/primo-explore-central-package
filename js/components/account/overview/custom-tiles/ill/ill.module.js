import ILLiad from './illiad.service.js';
import IllRequests from './ill-requests/ill-requests.component';
import IllArticles from './ill-articles/ill-articles.component';

export default angular
  .module('ill', [])
  .service('illiad', ILLiad)
  .component('illRequests', IllRequests)
  .component('illArticles', IllArticles)
  .name;