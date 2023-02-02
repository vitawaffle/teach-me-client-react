import * as yup from 'yup';

import { strings } from './localization';
import { isSet } from './utils';
import { useGetActiveRules } from './validation/password';

import type { Rule } from './validation/password';

yup.addMethod(yup.string, 'username', function (this) {
  return this.test(
    'username',
    strings.validation.username,
    (value?: string): boolean => !isSet(value)
      || /^[a-zA-Z0-9_]{1,32}$/.test(value as string),
  );
});

yup.addMethod(yup.string, 'password', function (this) {
  return this.test(
    'password',
    strings.validation.password,
    async (value?: string): Promise<boolean> => {
      const getActiveRules = useGetActiveRules();
      const rules = await getActiveRules();
      return rules.map(
        (rule: Rule) => !isSet(value) || rule.isValid(value as string),
      ).filter(
        (isValid: boolean) => !isValid,
      ).length === 0;
    },
  );
});

declare module 'yup' {
  /* eslint-disable @typescript-eslint/consistent-type-definitions */
  interface StringSchema extends yup.BaseSchema {
    username: () => StringSchema;
    password: () => StringSchema;
  }
}

export default yup;
