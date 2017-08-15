describe('Top Bar', () => {

  beforeEach(() => {
    browser.get('search?vid=TWINCITIES&lang=en_US');
  });

  describe('Tags link', () => {
    it('should not be present', () => {
      /*
       * Removing the tags link is done in the 
       * Back Office "views wizard"
       */
      expect(
        element(by.css('prm-main-menu a[aria-label="nui.mainmenu.label.tags"]')).isPresent()
      ).toBeFalsy();
    });
  });

  describe('Logo', () => {
    it('should be clickable', () => {
      expect(
        element(by.css('prm-logo-after a')).isPresent()
      ).toBeTruthy();
    });
  });

});
