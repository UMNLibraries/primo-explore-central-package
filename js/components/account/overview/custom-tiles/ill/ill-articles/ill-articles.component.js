import template from './ill-articles.html';

// TODO: limit the number of requests / articles that display?

class IllArticlesController {
  constructor(illiad, $window) {
    this.illiad = illiad;
    this.$window = $window;
    this.articles = [];
  }

  hasArticles() {
    return Array.isArray(this.articles) && this.articles.length > 0;
  }

  loadArticles() {
    this.loading = true;
    this.illiad
      .getArticles()
      .then((articles) => (this.articles = articles))
      .finally(() => (this.loading = false));
  }

  goToArticlePage(txnNum) {
    this.$window.location.href = this.illiad.getArticlePageUrl(txnNum);
  }
}

IllArticlesController.$inject = ['illiad', '$window'];

export default {
  controller: IllArticlesController,
  template: template,
};
