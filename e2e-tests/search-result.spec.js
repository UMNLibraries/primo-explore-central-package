describe('Search Result', () => {
  describe('Availability', () => {
    it('should display a custom availability message for ArchivesSpace', () => {
      const id = 'ARCHIVES_SPACEumn//repositories/13/resources/8080';
      browser.get(
        `fulldisplay?docid=${id}&context=L&vid=TWINCITIES&lang=en_US`
      );
      const availability = element(by.css('.availability-status')).getText();
      expect(availability).toBe('View collection guide');
    });
  });
});
