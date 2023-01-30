import LocaleTemplate from './LocaleTemplate';

const stringsRu: LocaleTemplate = {
  applicationName: 'Teach Me',
  components: {
    layout: {
      home: 'На главную',
    },
  },
  pages: {
    errors: {
      notFound: {
        name: 'Страница не найдена',
        message: 'Кажется, вы заблудились - такой страницы не существует. Попр'
          + 'обуйте вернуться на главную страницу по ссылке снизу.',
        toHome: 'На главную',
      },
    },
  },
};

export default stringsRu;
