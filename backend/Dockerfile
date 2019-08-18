FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3333

ENV MONGO_CONNECTION_STRING 'mongodb://localhost:27017/myapp'

CMD [ "node", "src/server.js" ]