# Building app
FROM node:14.15.3 as build

WORKDIR /app
COPY . .

RUN npm ci
RUN npm run build -- --deployUrl /angular/

# Starting nginx
FROM nginx

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/angular /usr/share/nginx/html
