# ReZet_test_client

## Запуск проекта
 
1.`npm install` - Установка зависимостей

2.`npm start` - Запуск проекта

## Общее

Приложение работает на порту `3000`;

## Регистрация и авторизация

>На клиенте не реализованы формы для регистрации и авторизации. Есть только кнопки "Войти", "Регистрация" и "Выйти". Подробнее [здесь](https://github.com/Dmitry552/ReZet_test_server/blob/master/README.md); 

>При Регистрации отправляется `POST` запрос с данными `body: {mail: 'user@gmail.com', password: '12345'}`. Но так-как такой пользователь уже зарегестрирован то возвращается соответствующие предуприждение.

>При нажатии на кнопку Войти отправляется `POST` запрос с данными `body: {mail: 'user@gmail.com', password: '12345'}`. Возвращается собственно пользователь и JWT токен который сохраняется в localStorage.

>Кнопка Выйти просто очищает объект user в состоянии и удаляет JWT токен из localStorage;

