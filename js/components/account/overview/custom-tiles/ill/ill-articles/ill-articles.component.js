import template from './ill-articles.html';

const MAX_ARTICLES_TO_DISPLAY = 3;

class IllArticlesController {
  constructor(illiad, $window) {
    this.illiad = illiad;
    this.$window = $window;
    this.maxDisplay = MAX_ARTICLES_TO_DISPLAY;
    this.articles = [];
  }

  $onInit() {
    this.loadArticles();
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
