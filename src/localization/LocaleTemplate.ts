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
    },
  },
  validation: {
    required: string,
  },
};

export default LocaleTemplate;
