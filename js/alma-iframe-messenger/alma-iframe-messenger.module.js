import AlmaIframeMessenger from './alma-iframe-messenger.service';

export default angular
  .module('almaIframeMessenger', [])
  .service('almaIframeMessenger', AlmaIframeMessenger)
  .run(['almaIframeMessenger', almaIframeMessenger => almaIframeMessenger.init()])
  .name;