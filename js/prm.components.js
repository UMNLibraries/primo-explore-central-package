app.component('prmSearchResultAvailabilityLineAfter', {
    bindings: { parentCtrl: '<'},
    template: '<hathi-trust-availability hide-online="true"></hathi-trust-availability>'
});

app.component('prmServiceLinksAfter', {
    bindings: { parentCtrl: '<'},
    template: '<pubmed-fix></pubmed-fix>'
});
