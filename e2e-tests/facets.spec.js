describe('Facets', () => {
  it('should not show the "PCI Expand Beyond" facet', () => {
    browser.get('search?query=any,contains,foo&tab=article_discovery&search_scope=mncat_discovery&sortby=rank&vid=TWINCITIES&offset=0');
    expect(element(by.model('$ctrl.pcAvailability')).isPresent()).toBeFalsy();
  });
  it('should show the "PCI Expand Beyond" facet when the URL contains "&showExpand=true"', () => {
    browser.get('search?query=any,contains,foo&tab=article_discovery&search_scope=mncat_discovery&sortby=rank&vid=TWINCITIES&offset=0&showExpand=true');
    expect(element(by.model('$ctrl.pcAvailability')).isPresent()).toBeTruthy();
  });
});
