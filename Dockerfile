# Базовый образ — лёгкий nginx для раздачи статики
FROM nginx:alpine

# Рабочая директория внутри контейнера
WORKDIR /usr/share/nginx/html

# Копируем файлы проекта
COPY index.html .
COPY style.css .
COPY app.js .

# nginx слушает порт 80 по умолчанию
EXPOSE 80

# Команда запуска (nginx стартует автоматически в базовом образе)
CMD ["nginx", "-g", "daemon off;"]
