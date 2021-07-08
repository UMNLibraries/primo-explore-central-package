import ViewProperties from './view-properties';
import CampusCode from './campus-code';

/**
 * Configuration service to support feature flagging.
 */
class Config {
  constructor($window) {
    this.appConfig = $window.appConfig;
    this.viewProperties = new ViewProperties(
      this.appConfig['mapping-tables']['View Properties']
    );
    this.institution =
      this.appConfig['primo-view']['institution']['institution-code'];
  }

  get showCustomAccountTiles() {
    return this.institution === CampusCode.TWINCITIES;
  }

  /**
   * Indicates if the custom ILLiad integration components should display.
   */
  get enableIlliad() {
    return this.viewProperties.getValue('umn-illiad-enable') === 'true';
  }
}

Config.$inject = ['$window'];

export default Config;