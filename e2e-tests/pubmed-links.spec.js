describe('Pubmed Links', () => {
  it('should contain the "umnbmlib" otool parameter in the TWINCITIES view', () => {
    browser.get('fulldisplay?docid=TN_medline21798953&context=PC&lang=en_US&vid=TWINCITIES');
    element.all(by.partialLinkText('View this record in MEDLINE')).each((link) => {
      expect(link.getAttribute('href')).toContain('otool=umnbmlib');
    });
  });
  it('should contain the "umndlib" otool parameter in the DULUTH view', () => {
    browser.get('fulldisplay?docid=TN_medline21798953&context=PC&lang=en_US&vid=DULUTH');
    element.all(by.partialLinkText('View this record in MEDLINE')).each((link) => {
      expect(link.getAttribute('href')).toContain('otool=umndlib');
    });
  });
  it('should contain the "mnumclib" otool parameter in the CROOKSTON view', () => {
    browser.get('fulldisplay?docid=TN_medline21798953&context=PC&lang=en_US&vid=CROOKSTON');
    element.all(by.partialLinkText('View this record in MEDLINE')).each((link) => {
      expect(link.getAttribute('href')).toContain('otool=mnumclib');
    });
  });
});
