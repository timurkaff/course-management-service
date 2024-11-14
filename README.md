# Course Management Service

Проект веб-сервиса для управления обучающими курсами. На данный момент выполнена начальная настройка проекта, организована структура веток и настроен маршрутизатор для навигации между страницами.

## Стек технологий

- **Vite** — инструмент для создания и сборки современных фронтенд-приложений.
- **React** — библиотека для создания пользовательских интерфейсов.
- **TypeScript** — статическая типизация для повышения надежности кода.
- **React Router** — библиотека для маршрутизации.
- **Zustand** - Zustand - современный инструмент для управления состоянием React-приложений.

## Структура проекта

Проект структурирован в соответствии с принципами Feature-Sliced Design. Основные директории:

- `app/` — корневой компонент и конфигурация приложения.
- `pages/` — основные страницы приложения.
- `features/` — отдельные функциональные модули.
- `Shared/` - общие компоненты и типы.

## Gitflow

Для управления версиями используется стратегия Gitflow. Ветки, созданные на данный момент:

- **main** — основная ветка для финальных релизов.
- **develop** — ветка для интеграции изменений.
- **feature/setup-routing** — ветка для настройки маршрутизации.
- **feature/integrate-zustand** — ветка для настройки управления состоянием.

## Установка и запуск проекта

1. Клонируйте репозиторий:
```bash
git clone https://github.com/timurkaff/course-management-service.git
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите проект:
```bash
npm run dev
```
## Прогресс

- Проект инициализирован с использованием Vite и шаблона `react-ts`.
- Настроены базовые ветки в соответствии с Gitflow.
- Создана и настроена маршрутизация с использованием React Router
- Настроено состояние с использованием Zustand.

## TODO
- Подключить React Query
- Добавить тип Nullable для использования в проекте.
