import LocaleTemplate from './LocaleTemplate';

const stringsEn: LocaleTemplate = {
  applicationName: 'Teach Me',
  components: {
    layout: {
      home: 'Home',
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
  },
  validation: {
    required: 'This field is required',
  },
};

export default stringsEn;
