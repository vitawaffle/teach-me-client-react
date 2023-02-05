import * as yup from 'yup';

import { strings } from './localization';
import { isSet } from './utils';

import type Rule from './validation/password/Rule';

yup.addMethod(yup.string, 'username', function (this) {
  return this.test(
    'username',
    strings.validation.username,
    (value?: string): boolean => !isSet(value)
      || /^[a-zA-Z0-9_]{1,32}$/.test(value as string),
  );
});

yup.addMethod(yup.string, 'password', function (
  this,
  getPasswordRules: () => Promise<Rule[]>,
) {
  return this.test(
    'password',
    strings.validation.password,
    async (value?: string): Promise<boolean> => {
      const rules = await getPasswordRules();
      return !isSet(value)
        || rules.filter(rule => !rule.isValid(value as string)).length === 0;
    },
  );
});

yup.addMethod(yup.string, 'unique', function (
  this,
  collection: string,
  errorMessage?: string,
) {
  return this.test(
    'unique',
    errorMessage !== undefined ? errorMessage : strings.validation.unique,
    async (value?: string): Promise<boolean> => false,
  );
});

declare module 'yup' {
  /* eslint-disable @typescript-eslint/consistent-type-definitions */
  interface StringSchema extends yup.BaseSchema {
    username: () => StringSchema;
    password: (getPasswordRules: () => Promise<Rule[]>) => StringSchema;
  }
}

export default yup;
