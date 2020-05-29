class BrowzineController {
  constructor(browzineService, $scope) {
    this.browzineService = browzineService;
    this.$scope = $scope;
  }

  $onInit() {
    console.log('SCOPE: ', this.$scope);
    this.browzineService.handleSearchResult(this.$scope);
  }
}

BrowzineController.$inject = ['browzineService', '$scope'];

export default {
  require: {
    parentCtrl: '^prmSearchResultAvailabilityLine',
  },
  controller: BrowzineController,
};
