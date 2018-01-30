
describe('GoogleAnalytics Service', () => {

  let $rootScope, $location, $window, googleAnalyticsService;

  beforeEach(angular.mock.module('googleAnalytics'));

  beforeEach(angular.mock.inject($injector => {
    $rootScope = $injector.get('$rootScope');
    $location = $injector.get('$location');
    $window = $injector.get('$window');
    googleAnalyticsService = $injector.get('googleAnalytics');
  }));

  it('should create a global ga function', () => {
    expect($window.ga).toBeDefined();
  });

  it('should have a campus dimension based on the view id', () => {
    $location.url('/primo-explore/search?vid=TWINCITIES');
    expect(googleAnalyticsService.campusDim).toBe('twincities');
    $location.url('/primo-explore/search?vid=DULUTH');
    expect(googleAnalyticsService.campusDim).toBe('duluth');
    $location.url('/primo-explore/search?vid=MORRIS');
    expect(googleAnalyticsService.campusDim).toBe('morris');
    $location.url('/primo-explore/search?vid=CROOKSTON');
    expect(googleAnalyticsService.campusDim).toBe('crookston');
  });

  it('should record pageview events when the location changes', () => {
    let url = '/foo';
    spyOn($window, 'ga');
    googleAnalyticsService.trackPageviews();
    $rootScope.$broadcast('$locationChangeSuccess', url);
    expect($window.ga).toHaveBeenCalledWith('send', 'pageview', {location: url});
  });

  it('should forward event tracking data to GA', () => {
    spyOn($window, 'ga');
    googleAnalyticsService.trackEvent('Links', 'My Link Click');
    expect($window.ga).toHaveBeenCalledWith('send', 'event', 'Links', 'My Link Click', undefined);
  });

});
