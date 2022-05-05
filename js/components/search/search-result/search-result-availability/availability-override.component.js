/**
 * Overrides the calculated availability message for specific data sources.
 */
class AvailabilityOverrideController {
  $onInit() {
    const dataSource = this.parentCtrl.result.pnx.control.sourceid[0];
    if (dataSource === 'ARCHIVES_SPACE')
      this.availability = this.translate('fulldisplay.linktocollguide');
  }

  translate(code) {
    return this.parentCtrl.$translate.instant(code);
  }

  set availability(msg) {
    this.parentCtrl.handleDueDate = () => msg;
  }
}

export default {
  require: {
    parentCtrl: '^prmSearchResultAvailabilityLine',
  },
  controller: AvailabilityOverrideController,
};
