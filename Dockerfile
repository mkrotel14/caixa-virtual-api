FROM node:lts-alpine3.12

LABEL MAINTAINER "Gian Carlo Mantuan <giancarlo.mdr@gmail.com>"

# Install Yarn
RUN apk add --no-cache yarn

# Clearing cache
RUN rm -rf /var/cache/apk/* && rm -rf /tmp/*

# Install PM2
RUN yarn global add pm2

# Create the workdir
RUN mkdir app && chown -R node:node /app
WORKDIR /app

USER node

COPY --chown=node:node . .

RUN yarn install

EXPOSE 3000

CMD pm2-runtime ecosystem.config.js
