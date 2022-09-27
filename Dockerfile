# syntax=docker/dockerfile:1
FROM node:lts-alpine

ENV NODE_ENV=production
USER node

WORKDIR /home/node/app
COPY ["package.json", "package-lock.json*", "./"]
RUN yarn install --production
COPY . .

EXPOSE 3000
CMD ["yarn", "start"]
