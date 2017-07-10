// Add an "after after" directive to allow for view-level customization

export default {
  bindings: {parentCtrl: '<'},
  template: '<prm-search-bookmark-filter-after-after grandparent-ctrl="$parentCtrl"></prm-search-bookmark-filter-after-after>'
}
