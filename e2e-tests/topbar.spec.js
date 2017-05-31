describe('Top Bar', () => {
  describe('Tags link', () => {
    it('should be hidden', () => {
      browser.get('search?vid=TWINCITIES&lang=en_US');
      expect(
        element(by.css('prm-main-menu a[aria-label="nui.mainmenu.label.tags"]')).isDisplayed()
      ).toBeFalsy();
    });
  });

});
