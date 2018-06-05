describe('ShibAuthComponent', () => {
  beforeEach(angular.mock.module('shibAuth'));

  let element, scope, controller, $compile, shibAuthEvents;

  beforeEach(() => {
    angular.mock.inject($injector => {
      scope = $injector.get('$rootScope').$new();
      $compile = $injector.get('$compile');
      shibAuthEvents = $injector.get('shibAuthEvents');
    });
    scope.callback = jasmine.createSpy('callback');
    element = angular.element('<shib-auth on-auth="callback()"><div>content</div></shib-auth>');
    element = $compile(element)(scope);
    controller = element.controller('shibAuth');
    scope.$apply();
  });

  it('should register a shib auth event observer', () => {
    expect(shibAuthEvents.observers.length).toBe(1);
  });

  it('should remove its event observer once notified', () => {
    controller.authenticationCallback();
    expect(shibAuthEvents.observers.length).toBe(0);
  });

  it('should trigger the on-auth binding once notified', () => {
    controller.authenticationCallback();
    expect(scope.callback).toHaveBeenCalled();
  });

  it('should add an shib host iframe', ()  => {
    let iframe = element.find('iframe');
    expect(iframe.length).toBe(1);
  });

  it('should remove the shib host iframe once notified', ()  => {
    controller.authenticationCallback();
    let iframe = element.find('iframe');
    expect(iframe.length).toBe(0);
  });

  it('should remove its shib auth observer when destroyed', () => {
    expect(shibAuthEvents.observers.length).toBe(1);
    scope.$destroy();
    expect(shibAuthEvents.observers.length).toBe(0);
  });


});