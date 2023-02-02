import { useDispatch, setIsAuthenticated } from '../redux';
import client from '../client';

const useCheckIsAuthenticated = () => {
  const dispatch = useDispatch();

  const checkIsAuthenticated = async () => {
    try {
      await client.get<void>('/users/me');
      dispatch(setIsAuthenticated(true));
      return true;
    } catch (error) {
      dispatch(setIsAuthenticated(false));
      return false;
    }
  };

  return checkIsAuthenticated;
};

export default useCheckIsAuthenticated;
