import browseApiInterceptor from './browse-api-interceptor';

describe('browseApiInterceptor', () => {
  let interceptor;

  beforeEach(() => {
    interceptor = browseApiInterceptor();
  });

  it('removes size designators from call numbers', () => {
    const result = interceptor.request({
      url: '/primo_library/libweb/webservices/rest/v1/browse',
      params: {
        callNumber: 'Game Folio F552 .M37 2004',
      }
    });
    expect(result.params.callNumber).toEqual('F552 .M37 2004');
  });

  it('only affects browse API requests', () => {
    const result = interceptor.request({
      url: '/primo_library/libweb/webservices/rest/v1/whatever',
      params: {
        callNumber: 'Game Folio F552 .M37 2004',
      }
    });
    expect(result.params.callNumber).toEqual('Game Folio F552 .M37 2004');
  });
});
