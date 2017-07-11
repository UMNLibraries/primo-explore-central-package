class PrmSearchResultListAfterController {
  constructor($location) {
    this._$location = $location;
  }

  get visible() {
    return (this.vid === 'TWINCITIES' 
        &&  this.onSearchPage
        && !this.searchInProgress);
  }

  get vid() {
    return this.prmSearchResultListCtrl
               .briefResultService
               .userSessionManagerService
               .vid;
  }

  get onSearchPage() {
    return (this._$location.path() === '/search' 
         || this._$location.path() === '/jsearch');
  }

  get searchInProgress() {
    return this.prmSearchResultListCtrl.searchInProgress;
  }

  get searchString() {
    return this.prmSearchResultListCtrl.searchString;
  }

}

export default {
  require: {prmSearchResultListCtrl: '^prmSearchResultList'},
  controller: PrmSearchResultListAfterController, 
  template: `
    <md-card ng-if='$ctrl.visible' class="default-card _md md-primoExplore-theme" prm-text="" dir="auto">
      <md-card-title>
        <md-card-title-text>
           <span class="md-headline">Haven't found what you're looking for?</span>       
        </md-card-title-text>
      </md-card-title>
      <md-card-content>
        <ul>
          <li>Use our <a href='https://umn.illiad.oclc.org/illiad/logon.html'> interlibrary loan service</a> to request it from another library.</li>
          <li>Try searching <a href='http://www.worldcat.org/search?q={{$ctrl.searchString}}'>WorldCat®</a>, <a href='http://www.lib.umn.edu/slog.phtml?url=http://scholar.google.com/scholar?q={{$ctrl.searchString}}'>Google™ Scholar</a>, or the <a href='https://lib.umn.edu'>Libraries Home Page</a>.</li> 
          <li><a href='https://www.lib.umn.edu/help'>Ask us</a> for assistance.</li>
        </ul>
      </md-card-content>
    </md-card>
  `
}
