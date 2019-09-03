describe('RedirectInvalidInstitution Service', () => {

  let $state, redirectInvalidInstitution;

  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('invalidInstitution'));

  beforeEach(angular.mock.inject($injector => {
    $state = $injector.get('$state');
    redirectInvalidInstitution = $injector.get('redirectInvalidInstitution');
    spyOn($state, 'transitionTo');
  }));

  it('should fix "invalid" inst parameters', () => {
    const beforeParams = {
      vid: 'TWINCITIES',
      id: '9914980550001701',
      inst: redirectInvalidInstitution.invalidInstitution,
      context: 'L'};
    const afterParams = Object.assign(
      beforeParams, 
      {inst: redirectInvalidInstitution.allCampusesScope});

    $state.go('fulldisplay', beforeParams, {reload: true});
    expect($state.transitionTo).toHaveBeenCalledWith('fulldisplay', afterParams, jasmine.any(Object));
  });

});
