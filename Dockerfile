FROM node:lts-alpine

ENV HOME=/app
RUN mkdir /app

COPY package.json $HOME

WORKDIR $HOME
RUN npm i -g @adonisjs/cli && npm install

CMD ["node","ace","serve","--watch"]