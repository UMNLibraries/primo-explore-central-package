describe('ILL Requests Component', () => {
  let element,
    scope,
    controller,
    $q,
    $compile,
    $window,
    illiadService,
    requests;

  const NO_REQUEST_MSG = 'There are no requests';

  function fakeTranslateDirective() {
    return {
      restrict: 'A',
      link(scope, element, attrs) {
        if (attrs.translate === 'nui.overview.norequests') {
          element.text(NO_REQUEST_MSG);
        }
      },
    };
  }

  function initializeComponent() {
    const html = '<ill-requests></ill-requests>';
    element = $compile(html)(scope);
    controller = element.controller('ill-requests');
    scope.$apply();
  }

  beforeEach(() => {
    angular.mock.module('ill');
  });

  beforeEach(() => {
    angular.mock.module({
      $window: {
        location: {
          href: '',
        },
      },
    });
  });

  beforeEach(() => {
    angular.mock.module(function ($compileProvider) {
      $compileProvider.directive('translate', fakeTranslateDirective);
    });
  });

  beforeEach(() => {
    angular.mock.inject(($injector) => {
      scope = $injector.get('$rootScope').$new();
      illiadService = $injector.get('illiad');
      $compile = $injector.get('$compile');
      $window = $injector.get('$window');
      $q = $injector.get('$q');
    });
  });

  /**
   *
   * @param {number} n number of articles to create
   */
  function mockRequests(n = 1) {
    requests = Array.from({ length: n }, (_, i) => ({
      txnNum: i,
      title: `Tets Title ${i}`,
      author: `Test Author ${0}`,
    }));
    spyOn(illiadService, 'getRequests').and.returnValue($q.resolve(requests));
  }

  it('should have a clickable title', () => {
    mockRequests(0);

    initializeComponent();

    const title = element.find('h2');
    title.triggerHandler('click');
    expect($window.location.href).toEqual(illiadService.getRequestPageUrl());
  });

  it('should list articles', () => {
    const requestCount = 2;
    mockRequests(requestCount);

    initializeComponent();

    const listItems = element.find('md-list-item');
    expect(listItems.length).toEqual(requestCount);
  });

  it('should link to ILLiad requests', () => {
    const requestCount = 2;
    mockRequests(requestCount);

    initializeComponent();

    const listItems = element.find('md-list-item');
    for (let i = 0; i < requestCount; i++) {
      const request = requests[i];
      listItems[i].click();
      expect($window.location.href).toEqual(
        illiadService.getRequestPageUrl(request.txnNum)
      );
    }
  });

  it('should display a link to ILLiad when then number of requests exceeds the display threshold', () => {
    const requestCount = controller.maxDisplay + 1;
    mockRequests(requestCount);

    initializeComponent();

    const listItems = element.find('md-list-item');
    expect(listItems.length).toEqual(controller.maxDisplay);
    const button = element.find('md-button');
    expect(button.text().trim()).toEqual(`View all ${requestCount} requests`);
    button.triggerHandler('click');
    expect($window.location.href).toEqual(illiadService.getRequestPageUrl());
  });

  it('should display a message if there are no requests', () => {
    const requestCount = 0;
    mockRequests(requestCount);

    initializeComponent();

    const content = element.text().trim();
    expect(content).toContain(NO_REQUEST_MSG);
  });
});
