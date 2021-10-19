const sizePrefixes = [
  'Videotp',
  'Quarto',
  'Folio',
  'Oversize',
  'Mcard',
  'Mfiche',
  'Mfilm',
  'Mini',
  'Flat',
  'Small',
  'Audiocd',
  'Audioct',
  'Audiodsc',
  'Audiotp',
  'CD-ROM',
  'Chart',
  'Diorama',
  'Diskette',
  'Filmst/c',
  'Filmsl',
  'Flascds',
  'Game',
  'Intervd',
  'Kit',
  'Model',
  'Motionpc',
  'Mss',
  'MssB',
  'Picture',
  'Progtext',
  'Realia',
  'Slide/ct',
  'Slides',
  'Slide/t',
  'Microsc',
  'Stereosc',
  'Transpar',
  'Videoct',
  'Videodsc',
  'Videoc/s',
];

const sizePrefixPattern = new RegExp(`.*(${sizePrefixes.join('|')})\\s+`, 'g');

/**
 * Workaround to prevent call number size designators from messing up virtual
 * browse.
 * @returns HTTP interceptor that removes call number size designators from
 * any browse API request.
 */
function browseApiInterceptor() {
  return {
    request: (request) => {
      if (request.url === '/primo_library/libweb/webservices/rest/v1/browse') {
        const callNumber = request.params.callNumber;
        if (callNumber) {
          request.params.callNumber = callNumber.replace(sizePrefixPattern, '');
        }
      }
      return request;
    },
  };
}

export default browseApiInterceptor;
