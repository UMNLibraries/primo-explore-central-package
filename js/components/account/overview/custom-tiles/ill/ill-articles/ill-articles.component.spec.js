describe('ILL Articles Component', () => {
  let element,
    scope,
    controller,
    $q,
    $compile,
    $window,
    illiadService,
    articles;

  beforeEach(() => {
    angular.mock.module('ill');
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

  beforeEach(() => {
    spyOn($window, 'open');
  });

  function initializeComponent() {
    const html = '<ill-articles></ill-articles>';
    element = $compile(html)(scope);
    controller = element.controller('ill-articles');
    scope.$apply();
  }

  /**
   *
   * @param {number} n number of articles to create
   */
  function stubArticles(n = 1) {
    articles = Array.from({ length: n }, (_, i) => ({
      txnNum: i,
      title: `Tets Title ${i}`,
      author: `Test Author ${0}`,
    }));
    spyOn(illiadService, 'getArticles').and.returnValue($q.resolve(articles));
  }

  it('should have a clickable title', () => {
    stubArticles(0);

    initializeComponent();

    const title = element.find('h2');
    title.triggerHandler('click');
    expect($window.open).toHaveBeenCalledWith(
      illiadService.getArticlePageUrl(),
      '_blank'
    );
  });

  it('should list articles', () => {
    const articleCount = 2;
    stubArticles(articleCount);

    initializeComponent();

    const listItems = element.find('md-list-item');
    expect(listItems.length).toEqual(articleCount);
  });

  it('should link to full-text', () => {
    const articleCount = 2;
    stubArticles(articleCount);

    initializeComponent();

    const listItems = element.find('md-list-item');
    for (let i = 0; i < articleCount; i++) {
      const article = articles[i];
      listItems[i].click();
      expect($window.open).toHaveBeenCalledWith(
        illiadService.getArticlePageUrl(article.txnNum),
        '_blank'
      );
    }
  });

  it('should display a link to ILLiad when then number of articles exceeds the display threshold', () => {
    const articleCount = controller.maxDisplay + 1;
    stubArticles(articleCount);

    initializeComponent();

    const listItems = element.find('md-list-item');
    expect(listItems.length).toEqual(controller.maxDisplay);
    const button = element.find('md-button');
    expect(button.text().trim()).toEqual(`View all ${articleCount} articles`);
    button.triggerHandler('click');
    expect($window.open).toHaveBeenCalledWith(
      illiadService.getArticlePageUrl(),
      '_blank'
    );
  });

  it('should display a message if there are no articles', () => {
    const articleCount = 0;
    stubArticles(articleCount);

    initializeComponent();

    const content = element.text().trim();
    expect(content).toContain('There are no documents');
  });
});
