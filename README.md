# README

## Настройка маршрутизации в React с использованием React Router

В этой ветке реализована маршрутизация в приложении React с помощью библиотеки React Router. React Router позволяет управлять навигацией между различными страницами вашего приложения, обеспечивая удобный и интуитивно понятный интерфейс для пользователей.

### Описание

Данный код создает основное приложение с маршрутизацией, определяя три страницы: главную страницу, страницу курсов и страницу "О нас". Каждая страница отображается в зависимости от текущего URL.

### Компоненты

1. **HomePage**: Компонент, отображающий главную страницу приложения.
2. **CoursesPage**: Компонент, отображающий страницу с курсами.
3. **AboutPage**: Компонент, отображающий страницу "О нас".

### Настройка маршрутизации

В коде используется компонент `Router` из библиотеки `react-router-dom`, который оборачивает все маршруты. Внутри него определяются маршруты с помощью компонента `Routes` и `Route`:

- **`<Router>`**: Оборачивает все маршруты и управляет историей навигации.
- **`<Routes>`**: Определяет набор маршрутов.
- **`<Route>`**: Определяет отдельный маршрут, связывая путь с соответствующим компонентом.

### Определенные маршруты

- **`/`**: Главная страница, отображает компонент `HomePage`.
- **`/courses`**: Страница курсов, отображает компонент `CoursesPage`.
- **`/about`**: Страница "О нас", отображает компонент `AboutPage`.