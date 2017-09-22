const OLD_PARAM = '&req.skin=umn';
const NEW_PARAM = '&req.skin=umn_nui';

class ChangeAlmaSkinController {
  $onInit() {
    if (this.hasLinkElement() && this.prmFullViewServiceContainerCtrl.isMashupLink()) {
      let oldUrl = this.link;
      if (!oldUrl.includes(NEW_PARAM)) {
        this.link = oldUrl.replace(OLD_PARAM, NEW_PARAM);
      }
    }
  }

  get link() {
    return this.prmFullViewServiceContainerCtrl.service.linkElement.links[0].link;
  }

  set link(val) {
    this.prmFullViewServiceContainerCtrl.service.linkElement.links[0].link = val;
  }

  hasLinkElement() {
    return !!this.prmFullViewServiceContainerCtrl.service.linkElement;
  }

}

let ChangeAlmaSkin = {
  require: {prmFullViewServiceContainerCtrl: '^prmFullViewServiceContainer'},
  controller: ChangeAlmaSkinController
};

export default ChangeAlmaSkin;
