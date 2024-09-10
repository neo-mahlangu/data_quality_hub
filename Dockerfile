

FROM public.ecr.aws/docker/library/node:16.20.0-alpine AS builder
 
ENV NPM_CONFIG_LOGLEVEL warn
ARG NPM_TOKEN
 
WORKDIR /opt/web
 

COPY package.json ./
RUN npm install
RUN rm -f .npmrc
 
ENV PATH="./node_modules/.bin:$PATH"
 
COPY . ./
RUN ng build --configuration production --base-href='/data_quality_hub/' --deploy-url='./'
 
FROM nginx:alpine
COPY --from=app /usr/src/app/dist/angular-docker/browser /usr/share/nginx/html 
RUN ls /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
