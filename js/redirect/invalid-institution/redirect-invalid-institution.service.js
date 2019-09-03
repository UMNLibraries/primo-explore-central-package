/**
 * This service corrects invalid "inst" parameters then the application is
 * entering the fulldisplay state. 
 * 
 * This is a hack to deal with the broken requests / loans links in the account
 * page. (The links do not resolve properly due to our multi-campus setup, and
 * the vendor does not intend to fix it.)
 */
class RedirectInvalidInstitution {
  constructor($state, $rootScope) {
    this.$state = $state;
    this.$rootScope = $rootScope;
    this.invalidInstitution = '01UMN_INST';
    this.allCampusesScope = 'UMN_ALMA';
  }

  init() {
    this.$rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
      if (toState.name === 'fulldisplay' && toParams.inst === this.invalidInstitution) {
        event.preventDefault();
        toParams.inst = this.allCampusesScope;
        this.$state.transitionTo(toState, toParams, {reload: true}); 
      }
    });
  }
}

RedirectInvalidInstitution.$inject = ['$state', '$rootScope'];

export default RedirectInvalidInstitution;