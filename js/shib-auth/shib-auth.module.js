import ShibAuthEvents from './shib-auth-events.service';
import ShibAuth from './shib-auth.component';

const HOST = 'stacksdev.lib.umn.edu';
const TARGET = 'https://stacksdev.lib.umn.edu/userapi/autologincb';
const EXPECTED_MSG = 'stacks';

export default angular
  .module('shibAuth', [])
  .constant('shibAuthHost', HOST)
  .constant('shibAuthTarget', TARGET)
  .constant('shibAuthExpectedMsg', EXPECTED_MSG)
  .service('shibAuthEvents', ShibAuthEvents)
  .component('shibAuth', ShibAuth)
  .run(['shibAuthEvents', shibAuthEvents => shibAuthEvents.init()])
  .name;