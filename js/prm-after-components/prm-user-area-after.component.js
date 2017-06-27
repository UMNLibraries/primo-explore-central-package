class PrmUserAreaAfterController {
  constructor($scope, $element) {
    this._$scope = $scope;
    this.userNameElements = $element.parent()[0].getElementsByClassName('user-name');
  }

  isGuest() {
    return this.parentCtrl.userSessionManagerService.isGuest();
  }

  $postLink() {
    if (this.isGuest()) {
      let unbindWatch = this._$scope.$watch('$ctrl.userNameElements', 
        userNameElements => {
          if (userNameElements) {
            Array.from(userNameElements).map(element => element.textContent = 'Sign in');
            unbindWatch();
          }
        }
      );
    }
  }

}

export default {
  bindings: {parentCtrl: '<'},
  controller: PrmUserAreaAfterController 
}
