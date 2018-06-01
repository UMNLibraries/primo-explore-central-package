import ShibAuthEvents from './shib-auth-events.service';



describe('ShibAuthEvents Service', () => {

  const MSG = 'my expected message';
  let $window, shibAuthEvents;

  beforeEach(() => {
    angular.mock.inject($injector => $window = $injector.get('$window'));
    shibAuthEvents = new ShibAuthEvents(MSG, $window);
  });

  it('should notify observers when expected message is dispatched', () => {
    let observer = jasmine.createSpy();
    shibAuthEvents.addObserver(observer);
    $window.postMessage(MSG, '*');
    expect(observer).toHaveBeenCalled();
  });



});