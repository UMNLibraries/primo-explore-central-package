class PrmSearchResultListAfterController {
  constructor($location, $window, $mdDialog) {
    this._$location = $location;
    this._$window = $window; 
    this._$mdDialog = $mdDialog;
  }

  get visible() {
    return (this.vid === 'TWINCITIES' 
        &&  this.onSearchPage
        && !this.searchInProgress);
  }

  get vid() {
    return this
      .prmSearchResultListCtrl
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

  showChatDialog() {
    this._$mdDialog.show({
      bindToController: true,
      locals: {
        parentCtrl: this
      },
      controllerAs: '$ctrl',
      controller: class {
        close(){
          this.parentCtrl._$mdDialog.hide();
        }
      },
      template: `<md-dialog class='qpoint-chat'>
                  <md-dialog-content class='qpoint-chat'>
                  <iframe src='https://www.questionpoint.org/crs/qwidgetV4/patronChatQwidget.jsp?langcode=1&instid=12947&skin=gray&size=fill&customSkin=https%3A%2F%2Fprimo-test.lib.umn.edu%2Fprimo_library%2Flibweb%2Fumn%2Fcss%2Fqpoint-chat.css' scrolling='no' height='100%' width='100%' style='overflow:hidden'></iframe>
                  </md-dialog-content>
                  <md-dialog-actions>
                    <md-button ng-click='$ctrl.close()'>Close</md-button>
                    </md-dialog-actions>
                 </md-dialog>`
    });
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
          <li><a ng-click='$ctrl.showChatDialog()' href=''>Chat with library staff 24/7</a></li>
          <li>Use our <a href='https://umn.illiad.oclc.org/illiad/logon.html'> interlibrary loan service</a> to request it from another library.</li>
          <li>Try searching <a href='http://www.worldcat.org/search?q={{$ctrl.searchString}}'>WorldCat®</a>, <a href='http://www.lib.umn.edu/slog.phtml?url=http://scholar.google.com/scholar?q={{$ctrl.searchString}}'>Google™ Scholar</a>, or the <a href='https://lib.umn.edu'>Libraries Home Page</a>.</li> 
          <li><a href='https://www.lib.umn.edu/help'>Ask us</a> for assistance.</li>
        </ul>
      </md-card-content>
    </md-card>
  `
};
