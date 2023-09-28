#stage 1
FROM node:18.16.1
WORKDIR /app
COPY package.json .
RUN nmp install
COPY . .
RUN npm run build

#stage 2
FROM nginx:latest
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]