import client from '../client';
import {
  useDispatch,
  useSelector,
  PasswordRules,
  setPasswordRules,
  selectPasswordRules,
} from '../redux';

const useGetPasswordRules = () => {
  const dispatch = useDispatch();
  const passwordRules = useSelector(selectPasswordRules);

  const getPasswordRules = async () => {
  };

  return getPasswordRules;
};

export default useGetPasswordRules;
