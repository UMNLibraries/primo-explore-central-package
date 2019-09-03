import RedirectInvalidInstitution from './redirect-invalid-institution.service';

export default angular
  .module('invalidInstitution', [])
  .service('redirectInvalidInstitution', RedirectInvalidInstitution)
  .run(['redirectInvalidInstitution', redirectInvalidInstitution => redirectInvalidInstitution.init()])
  .name;