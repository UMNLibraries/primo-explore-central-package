describe('Top Bar', () => {
  describe('Tags link', () => {
    it('should not be present', () => {
      /*
       * Removing the tags link is done in the 
       * Back Office "views wizard"
       */
      browser.get('search?vid=TWINCITIES&lang=en_US');
      expect(
        element(by.css('prm-main-menu a[aria-label="nui.mainmenu.label.tags"]')).isPresent()
      ).toBeFalsy();
    });
  });

});
