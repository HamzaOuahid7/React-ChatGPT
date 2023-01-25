FROM node:18.13.0-alpine as builder
WORKDIR /app
COPY ./package.json ./
RUN npm i
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "npm","start"]
