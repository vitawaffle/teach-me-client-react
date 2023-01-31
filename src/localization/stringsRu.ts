import LocaleTemplate from './LocaleTemplate';

const stringsRu: LocaleTemplate = {
  applicationName: 'Teach Me',
  components: {
    header: {
      logIn: 'Войти',
      signIn: 'Зарегистрироваться',
      logOut: 'Выйти',
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
    login: {
      username: 'Имя пользователя',
      password: 'Пароль',
      logIn: 'Войти',
    },
  },
  validation: {
    required: 'Это поле обязательно',
  },
};

export default stringsRu;
