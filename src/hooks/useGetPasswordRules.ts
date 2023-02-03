import client from '../client';
import { isSet } from '../utils';
import {
  useSelector,
  useDispatch,
  selectPasswordRules,
  setPasswordRules,
} from '../redux';

import type { PasswordRules } from '../redux';
import type Rule from '../validation/password/Rule';

const useGetPasswordRules = (): () => Promise<Rule[]> => {
  const passwordRules = useSelector(selectPasswordRules);
  const dispatch = useDispatch();

  const getPasswordRules = async (): Promise<Rule[]> => {
    let rules = passwordRules;
    if (!isSet(rules)) {
      rules = (await client.get<PasswordRules>('/password-rules')).data;
      dispatch(setPasswordRules(rules));
    }

    return [
      {
        getName: () => 'hasBigLetter',
        isValid: (value: string) => /[A-Z]/.test(value),
      },
      {
        getName: () => 'hasNumber',
        isValid: (value: string) => /[0-9]/.test(value),
      },
      {
        getName: () => 'hasSmallLetter',
        isValid: (value: string) => /[a-z]/.test(value),
      },
      {
        getName: () => 'minimalLength',
        isValid: (value: string) =>
          value.length >= (rules as PasswordRules).minimalLength,
      },
    ].filter(
      (rule: Rule): boolean => Object.keys(rules ?? {})
        .includes(rule.getName()),
    );
  };

  return getPasswordRules;
};

export default useGetPasswordRules;
