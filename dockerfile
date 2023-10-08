FROM node:18 as build
WORKDIR /usr/app
COPY . /usr/app
RUN npm install
RUN npm run build

FROM nginx:1.25.2
EXPOSE 8080
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/app/dist /usr/share/nginx/html
# TODO: Добавить возможность в зависимости от переменных по разному билдить проект. Что бы апи новостей отличался