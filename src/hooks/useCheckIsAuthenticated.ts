import { useDispatch, setIsAuthenticated } from '../redux';
import client from '../client';

const useCheckIsAuthenticated = (): () => Promise<boolean> => {
  const dispatch = useDispatch();

  const checkIsAuthenticated = async (): Promise<boolean> => {
    try {
      await client.get('/users/me');
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
