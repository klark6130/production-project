## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start:dev или npm run start:dev:vite - запуск dev-сервера
```

----

## Скрипты


- `npm run start` - Запуск frontend проекта на webpack dev server
- `npm run start:vite` - Запуск frontend проекта на vite,
- `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend
- `npm run start:dev:vite` - Запуск frontend проекта на vite dev server + backend
- `npm run start:dev:server`: "node json-server/index.js"
- `npm run build:prod` -  сборка в prod режиме
- `npm run build:dev` - сборка в dev режиме
- `npm run lint:ts` - проверка ts файлов линтером
- `npm run lint:ts:fix` - исправление ts файлов линтером
- `npm run lint:scss` - проверка scss файлов style линтером
- `npm run lint:scss:fix`- исправление scss файлов style линтером
- `npm run test:unit` - Запуск unit тестов c jest
- `npm run test:ui` - Запуск скриншотных тестов с loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов
- `npm run test:ui:ci` - Запуск скриншотных тестов в CI
- `npm run test:ui:report` - Генерация полного отчёта для скриншотных тестов
- `npm run test:ui:json` - Генерация JSON отчёта для скриншотных тестов
- `npm run test:ui:html` - Генерация HTML отчёта для скриншотных тестов
- `npm run storybook`: "start-storybook -p 6006 -c ./config/storybook",
- `npm run storybook:build` - Запуск сборки storybook
- `npm run prepare` - прекоммит хуки,
- `npm run generate:slice` - скрипт для генерации FSD слайсов

----
## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced Design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/ru/docs/get-started/overview)

----

## Работа с переводами

В проекте используется библиотека i18next для работы с переводами. Файлы с переводами хранятся в public/locales.

Для комфортной работы рекомендуется установить плагин для webstorm/vscode

Документация i18next - [https://react.i18next.com/]()

----

## Тесты

Подробнее о тестах - [Документация тестирование](/docs/tests.md)

----

## Линтинг
В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями

Также для строгого контроля главных архитектурных принципов используется собственный eslint plugin [eslint-plugin-bastrikov-da-eslint-plugin](https://www.npmjs.com/package/eslint-plugin-bastrikov-da-eslint-plugin), который содержит 3 правила:
1) path-checker - запрещает использовать абсолютные импорты в рамках одного модуля. Есть auto fix
2) layer-imports - проверяет корректность использования слоёв с точки зрения FSD (например, widgets нельзя использовать в features и entities)
3) public-api-imports - разрешает импорт из других модулей только из public api. Есть auto fix

#### Запуск линтеров
- `npm run lint:ts` - проверка ts файлов линтером
- `npm run lint:ts:fix` - исправление ts файлов линтером
- `npm run lint:scss` - проверка scss файлов style линтером
- `npm run lint:scss:fix`- исправление scss файлов style линтером

----

## Storybook

Подробнее о [Storybook](/docs/storybook.md)

-----

## Конфигурация проекта

Для разработки проект содержит 2 конфига
1) Webpack - ./config/build
2) Vite - vite.config.ts

Оба сборщика адаптированые под основные фичи приложения.

Вся конфигурация хранится в /config

- /config/babel - babel
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчётов и т.д.

----

## CI pipeline и pre commit хуки

Конфигурация github actions находится в ./github/workflows. В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в ./husky

----

## Работа с данными
 
Взаимодействие с данными осуществляется с помощью redux toolkit. По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется [DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----

## Сущности (entities)

- [Article](/src/entities/Article/README.md)
- [Comment](/src/entities/Comment/)
- [Counter](/src/entities/Counter/)
- [Country](/src/entities/Country/)
- [Currency](/src/entities/Currency/)
- [Notification](/src/entities/Notification/)
- [Profile](/src/entities/Profile/)
- [Rating](/src/entities/Rating/)
- [User](/src/entities/User/)

## Фичи (features)

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)

