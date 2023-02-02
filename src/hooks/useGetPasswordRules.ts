import client from '../client';
import {
  useDispatch,
  useSelector,
  setPasswordRules,
  selectPasswordRules,
} from '../redux';
import { isSet } from '../utils';

import type { PasswordRules } from '../redux';

const useGetPasswordRules = (): () => Promise<PasswordRules> => {
  const dispatch = useDispatch();
  const passwordRules = useSelector(selectPasswordRules);

  const getPasswordRules = async (): Promise<PasswordRules> => {
    if (!isSet(passwordRules)) {
      dispatch(setPasswordRules(
        (await client.get<PasswordRules>('/password-rules')).data,
      ));
    }
    return passwordRules as PasswordRules;
  };

  return getPasswordRules;
};

export default useGetPasswordRules;
