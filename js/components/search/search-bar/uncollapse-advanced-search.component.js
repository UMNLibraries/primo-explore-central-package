/**
 * Force the advanced search menu to always be uncollapsed by toggling 
 * whenever its collapsed state is true. 
 */
export default {
  bindings: { collapsed: '<' },
  require: { prmAdvancedSearchCtrl: '^prmAdvancedSearch' },
  controller: class {
    $onInit() {
      if (this.collapsed) this.prmAdvancedSearchCtrl.toggleFilters();
    }

    $onChanges(changes) {
      if (changes.collapsed.currentValue === true)
        this.prmAdvancedSearchCtrl.toggleFilters();
    }
  },
};
