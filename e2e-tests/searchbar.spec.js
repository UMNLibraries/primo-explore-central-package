describe('Search Bar', () => {
  describe('Autocomplete', () => {
    it('should not display tab suggestions in the TWINCITIES view', () => {
      browser.get('search?vid=TWINCITIES');
      let searchBar = element(by.id('searchBar'));
      let autoCompleteContainer = element(by.id('prm-simple-search'));
      searchBar.sendKeys('test');
      expect(autoCompleteContainer.getText()).not.toContain('MNCAT Discovery');
      expect(autoCompleteContainer.getText()).not.toContain(
        'Libraries Catalog'
      );
    });

    it('should not display tab suggestions in the MORRIS view', () => {
      browser.get('search?vid=MORRIS');
      let searchBar = element(by.id('searchBar'));
      let autoCompleteContainer = element(by.id('prm-simple-search'));
      searchBar.sendKeys('test');
      expect(autoCompleteContainer.getText()).not.toContain('Pounce');
    });
  });
});

describe('Advanced Search', () => {
  it('should not be collapsed', () => {
    browser.get('search?query=any,contains,foo&vid=TWINCITIES&mode=advanced');
    const searchFields = element(by.id('advancedSearchTabs'));
    expect(searchFields.getAttribute('class')).not.toContain('shrink-content');
  });
});
