type LocaleTemplate = {
  applicationName: string,
  components: {
    layout: {
      home: string,
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
  },
};

export default LocaleTemplate;
