# Трекер привычек

Простое веб-приложение для отслеживания ежедневных привычек.

## Возможности

- Добавление новых привычек
- Отметка выполненных привычек
- Счётчик выполненных привычек
- Удаление привычек
- Сохранение данных в localStorage

## Технологии

- HTML5, CSS3, Vanilla JS
- Docker + nginx
- Docker Compose
- Prettier (форматтер)
- ESLint (линтер)
- Husky + lint-staged (pre-commit хуки)

## Запуск без Docker

Откройте файл `index.html` в браузере — установка не требуется.

## Линтер и форматтер

Установить зависимости:
```bash
npm install
```

Форматирование кода:
```bash
npm run format
```

Проверка линтером:
```bash
npm run lint
```

Pre-commit хуки запускаются автоматически при каждом `git commit`.

## Запуск через Docker

Сборка образа:
```bash
docker build -t habit-tracker .
```

Запуск контейнера:
```bash
docker run -p 8080:80 habit-tracker
```

Откройте в браузере: http://localhost:8080

## Запуск через Docker Compose

Поднять проект:
```bash
docker-compose up -d
```

Остановить проект:
```bash
docker-compose down
```

Откройте в браузере: http://localhost:8080

## Качество кода

Установить зависимости:
```bash
npm install
```

Форматирование (prettier):
```bash
npm run format
```

Проверка линтером (eslint):
```bash
npm run lint
```

Pre-commit хук запускается автоматически перед каждым коммитом и проверяет форматирование и линтер.
