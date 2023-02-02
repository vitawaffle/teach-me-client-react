import * as yup from 'yup';

import { strings } from './localization';

yup.addMethod(yup.string, 'username', function (this) {
  return this.test(
    'username',
    strings.validation.username,
    (value?: string) => value === undefined
      || value === null
      || /^[a-zA-Z0-9_]{1,32}$/.test(value),
  );
});

declare module 'yup' {
  interface StringSchema extends yup.BaseSchema {
    username: () => StringSchema;
  }
}

export default yup;
