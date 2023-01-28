import LocalizedStrings from 'react-localization';

import stringsEn from './stringsEn';
import stringsRu from './stringsRu';

const strings = new LocalizedStrings({
  en: stringsEn,
  ru: stringsRu,
});

export default strings;
