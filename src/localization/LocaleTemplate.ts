type LocaleTemplate = {
  applicationName: string,
  components: {
    header: {
      logIn: string,
      signIn: string,
      logOut: string,
    },
  },
  pages: {
    errors: {
      notFound: {
        name: string,
        message: string,
        toHome: string,
      },
    },
    login: {
      username: string,
      password: string,
      logIn: string,
      invalidCredentials: string,
    },
    signin: {
      username: string,
      password: string,
      confirmPassword: string,
      signIn: string,
    },
  },
  validation: {
    required: string,
    username: string,
    password: string,
    unique: string,
    passwordMismatch: string,
  },
};

export default LocaleTemplate;
