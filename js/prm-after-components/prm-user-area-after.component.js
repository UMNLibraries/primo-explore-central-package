class PrmUserAreaAfterController {

  constructor($scope) {
    this._$scope = $scope;
  }

  get isGuest() {
    return this.parentCtrl.userSessionManagerService.isGuest();
  }

  _updateUserNameWhenAvailable() {
    let findUserNameElements = ()=> {
      let userNameElements = document.getElementsByClassName('user-name');
      return (userNameElements && userNameElements.length > 0) ? userNameElements : null;
    };
    let unbindWatch = this._$scope.$watch(findUserNameElements, userNameElements => {
      if (userNameElements) {
        Array.from(userNameElements).forEach(element => element.textContent = 'Sign in');
        unbindWatch();
      }
    });
  }

  $postLink() {
    if (this.isGuest) {
      this._updateUserNameWhenAvailable();
    }
  }

}

PrmUserAreaAfterController.$inject = ['$scope'];

export default {
  bindings: {parentCtrl: '<'},
  controller: PrmUserAreaAfterController 
};
