describe('Full Display', () => {
  describe('Pubmed Links', () => {
    it('should contain the "umnbmlib" otool parameter in the TWINCITIES view', () => {
      browser.get('fulldisplay?docid=TN_medline21798953&context=PC&lang=en_US&vid=TWINCITIES');
      element.all(by.partialLinkText('View this record in MEDLINE')).each((link) => {
        expect(link.getAttribute('href'))
          .toContain('otool=umnbmlib');
      });
    });
    it('should contain the "umndlib" otool parameter in the DULUTH view', () => {
      browser.get('fulldisplay?docid=TN_medline21798953&context=PC&lang=en_US&vid=DULUTH');
      element.all(by.partialLinkText('View this record in MEDLINE')).each((link) => {
        expect(link.getAttribute('href'))
          .toContain('otool=umndlib');
      });
    });
    it('should contain the "mnumclib" otool parameter in the CROOKSTON view', () => {
      browser.get('fulldisplay?docid=TN_medline21798953&context=PC&lang=en_US&vid=CROOKSTON');
      element.all(by.partialLinkText('View this record in MEDLINE')).each((link) => {
        expect(link.getAttribute('href'))
          .toContain('otool=mnumclib');
      });
    });
  });

  describe('Alma IFrames', () => {
    it('should not contain the "umn" skin parameter', () => {
      browser.get('fulldisplay?docid=TN_medline21798953&context=PC&lang=en_US&vid=TWINCITIES');
      element.all(by.css('iframe.mashup-iframe')).each((iframe) => {
        expect(iframe.getAttribute('ng-src')).not.toContain('&req.skin=umn');
      });
    });
  });

  describe('"Get it from other institutions" section', () => {
    it('should be hidden', () => {
      browser.get('fulldisplay?docid=UMN_ALMA21379779980001701&context=L&vid=TWINCITIES&lang=en_US');
      expect(element(by.tagName('prm-alma-more-inst')).isDisplayed())
        .toBeFalsy();
    });
  });

  describe('Tags service link', () => {
    it('should be hidden', () => {
      browser.get('fulldisplay?docid=UMN_ALMA21379779980001701&context=L&vid=TWINCITIES&lang=en_US');
      expect(element(by.buttonText('Tags')).isDisplayed())
        .toBeFalsy();
    });
  });

  describe('Tags service', () => {
    it('should be hidden', () => {
      browser.get('fulldisplay?docid=UMN_ALMA21379779980001701&context=L&vid=TWINCITIES&lang=en_US');
      expect(element(by.css('div#tags')).isDisplayed())
        .toBeFalsy();
    });
  });



});
