const PARAM = '&req.skin=umn';

class RemoveAlmaSkinController {
  $onInit() {
    if (this.prmFullViewServiceContainerCtrl.isMashupLink()) {
      let oldUrl = this.link;
      this.link = oldUrl.replace(PARAM, '');
    }
  }

  get link() {
    return this.prmFullViewServiceContainerCtrl.service.linkElement.links[0].link;
  }

  set link(val) {
    this.prmFullViewServiceContainerCtrl.service.linkElement.links[0].link = val;
  }

}

let RemoveAlmaSkin = {
  require: {prmFullViewServiceContainerCtrl: '^prmFullViewServiceContainer'},
  controller: RemoveAlmaSkinController
}

export default RemoveAlmaSkin;
