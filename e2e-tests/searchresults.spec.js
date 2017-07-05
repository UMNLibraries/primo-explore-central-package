describe('Search Results', () => {
  describe('"Haven\'t Found" Suggestions', () => {
    it('should display in the TWINCITIES view search results', () => {
      browser.get('search?query=any,contains,foo&tab=article_discovery&search_scope=mncat_discovery&vid=TWINCITIES&offset=0');
      expect(element(by.tagName('prm-search-result-list-after')).getText()).toContain('Haven\'t found what you\'re looking for?');
    });
  });

});
