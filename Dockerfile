FROM node:alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

RUN ng build --configuration=production

FROM nginx:alpine

COPY --from=build /app/dist/to-do-simple-app /usr/share/nginx/html

EXPOSE 80