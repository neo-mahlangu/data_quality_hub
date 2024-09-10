

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
 
FROM 912346747658.dkr.ecr.af-south-1.amazonaws.com/dayone/nginx
COPY default.conf.day1 /etc/nginx/conf.d/default.conf
USER www-data
COPY --from=builder --chown=www-data:www-data /opt/web/dist /var/www/htdocs
CMD ["nginx", "-g", "daemon off;"]
