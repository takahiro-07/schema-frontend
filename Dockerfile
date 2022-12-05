FROM node:18.12.1-alpine as build

ARG API_URL

ENV HOME=/LANG=C.UTF-8 \
    TZ=Asia/Tokyo \
    HOST=0.0.0.0 \
    API_URL=${API_URL}

WORKDIR /nginx
COPY . /nginx
RUN npm install
RUN npm run build

FROM nginx
COPY --from=build /nginx/build /usr/share/nginx/html

WORKDIR /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
