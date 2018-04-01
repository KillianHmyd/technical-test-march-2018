FROM node:carbon-alpine

WORKDIR /usr/src/app

COPY src ./src
COPY .babelrc .babelrc
COPY package*.json ./

RUN apk add --no-cache --virtual .gyp python make g++ \
  && npm install \
  && npm run build \
  && npm prune --production \
  && apk del .gyp \
  && rm -rf ./src

CMD ["npm", "start"]