const requestsStub = [
  {
    txnNum: 1246493,
    title:
      'Designing data-intensive applications - the big ideas behind reliable, scalable, and maintainable systems',
    author: 'Kleppmann, Martin',
  },
  {
    txnNum: 1480237,
    title:
      'Domain-driven design - tackling complexity in the heart of software',
    author: 'Evans, Erik',
  },
  {
    txnNum: 1581977,
    title: 'This is a test title',
    author: 'Some Author',
  },
];

const articlesStub = [
  {
    txnNum: 1582298,
    title: 'This is an article title',
    author: 'Some Author',
  },
];

const proxyBaseUrl = 'https://ezproxy.lib.umn.edu/login?qurl=';

class ILLiad {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
    this.baseUrl = 'https://stacks.lib.umn.edu/userapi/current-user'; // TBD...
  }

  // stubbing out the response for now...
  getRequests() {
    /*
    const url = `${this.baseUrl}/ill-requests`;
    return this.$http
      .get(url, { withCredentials: true, cache: true })
      .then(() => {
        return ...;
      });
      */
    return this.$q.resolve(requestsStub);
  }

  getArticles() {
    /*
    const url = `${this.baseUrl}/ill-articles`;
    return this.$http
      .get(url, { withCredentials: true, cache: true })
      .then(() => {
        return ...
      });
      */
    return this.$q.resolve(articlesStub);
  }

  /**
   * Returns the ILLiad URL for a given request (or the "all requests" page if no
   * transaction number is provided).
   * @param {number} txnNum (optional) An ILLiad transaction number for a request
   */
  getRequestPageUrl(txnNum) {
    if (txnNum) {
      return (
        proxyBaseUrl +
        encodeURIComponent(
          `https://umn.illiad.oclc.org/illiad/illiad.dll?Action=10&Form=63&Value=${txnNum}`
        )
      );
    } else {
      return (
        proxyBaseUrl +
        encodeURIComponent(
          'https://umn.illiad.oclc.org/illiad/illiad.dll?Action=10&Form=62'
        )
      );
    }
  }

  /**
   * Returns the URL for a given article (or the "available online" page if no
   * transaction number is provided).
   * @param {number} txnNum (optional) An ILLiad transaction number for an article
   */
  getArticlePageUrl(txnNum) {
    if (txnNum) {
      return (
        proxyBaseUrl +
        encodeURIComponent(
          `https://umn.illiad.oclc.org/illiad/illiad.dll?Action=10&Form=75&Value=${txnNum}`
        )
      );
    } else {
      return (
        proxyBaseUrl +
        encodeURIComponent(
          'https://umn.illiad.oclc.org/illiad/illiad.dll?Action=10&Form=64'
        )
      );
    }
  }
}

ILLiad.$inject = ['$http', '$q'];

export default ILLiad;
