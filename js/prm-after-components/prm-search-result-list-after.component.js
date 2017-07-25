// Add an "after after" directive to allow for view-level customization

export default {
  bindings: {parentCtrl: '<'},
  template: '<prm-search-result-list-after-after grandparent-ctrl="$parentCtrl"></prm-search-result-list-after-after>'
};