import LocaleTemplate from './LocaleTemplate';

const stringsEn: LocaleTemplate = {
  applicationName: 'Teach Me',
  components: {
    header: {
      logIn: 'Log in',
      signIn: 'Sign in',
      logOut: 'Log out',
    },
  },
  pages: {
    errors: {
      notFound: {
        name: 'Page Not Found',
        message: 'You seem to be lost - there is no such page. Try to return '
          + 'to the home page using the link below.',
        toHome: 'To Home',
      },
    },
    login: {
      username: 'Username',
      password: 'Password',
      logIn: 'Log in',
    },
    signin: {
      username: 'Username',
      password: 'Password',
      confirmPassword: 'Confirm password',
      signIn: 'Sign in',
    },
  },
  validation: {
    required: 'This field is required',
    username: 'Invalid username format',
  },
};

export default stringsEn;
