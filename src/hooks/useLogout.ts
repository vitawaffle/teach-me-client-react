const useLogout = (): () => void => {
  const logout = (): void => {
    localStorage.removeItem('accessToken');
  };

  return logout;
};

export default useLogout;
