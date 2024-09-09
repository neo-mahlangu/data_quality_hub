FROM node:8.11.2-alpine as build_stage

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm config set strict-ssl false

RUN npm install -g @angular/cli

RUN npm install

COPY . .

RUN npm run ng build -- --configuration=PROD
EXPOSE 8081 8080 80
