

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
 

# Copy the built Angular app from the build stage to the Nginx HTML directory
COPY --from=build /app/dist/data_quality_hub /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

