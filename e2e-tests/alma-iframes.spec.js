describe('Alma iframes', () => {
  it('should not contain the "umn" skin parameter', () => {
    browser.get('fulldisplay?docid=TN_medline21798953&context=PC&lang=en_US&vid=TWINCITIES');
    element.all(by.css('iframe.mashup-iframe')).each((iframe) => {
      expect(iframe.getAttribute('ng-src')).not.toContain('&req.skin=umn');
    });
  });
});
