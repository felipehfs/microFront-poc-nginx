# Building app
FROM node:14.15.3 as build

WORKDIR /app
COPY . .

RUN npm ci
RUN npm run build

# Starting nginx
FROM nginx

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html
