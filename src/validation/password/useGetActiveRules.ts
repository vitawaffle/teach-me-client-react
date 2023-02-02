import { isSet } from '../../utils';
import useGetPasswordRules from './useGetPasswordRules';

import type Rule from './Rule';

const useGetActiveRules = (): () => Promise<Rule[]> => {
  const getPasswordRules = useGetPasswordRules();

  const getActiveRules = async (): Promise<Rule[]> => {
    const passwordRules = await getPasswordRules();

    const rules: Rule[] = [
      {
        isValid: (value: string): boolean => /[A-Z]/.test(value),
        getName: (): string => 'hasBigLetter',
      },
      {
        isValid: (value: string): boolean => /[0-9]/.test(value),
        getName: (): string => 'hasNumber',
      },
      {
        isValid: (value: string): boolean => /[a-z]/.test(value),
        getName: (): string => 'hasSmallLetter',
      },
      {
        isValid: (value: string): boolean => {
          const ruleValue = passwordRules.minimalLength;
          return value.length >= (isSet(ruleValue) ? ruleValue : 8);
        },
        getName: (): string => 'minimalLength',
      },
    ];

    return rules.filter((rule: Rule) => isSet(passwordRules[rule.getName()]));
  };

  return getActiveRules;
};

export default useGetActiveRules;
