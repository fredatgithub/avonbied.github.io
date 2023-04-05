# syntax=docker/dockerfile:1
# FROM node:lts-alpine AS runtime

# ARG NODE_ENV="production"
# ENV NODE_ENV=${NODE_ENV}
# USER node

# WORKDIR /home/node/app

# # COPY ["package.json", "yarn.lock", "./"]
# COPY . .
# RUN yarn install --production
# RUN yarn run build

# ENV HOST=0.0.0.0
# ENV PORT=3000

# EXPOSE 3000
# CMD node ./dist/server/entry.mjs

# FROM node:lts-alpine AS build
# WORKDIR /app
# COPY . .
# RUN yarn install
# RUN yarn run build

# FROM httpd:alpine AS runtime
# COPY --from=build /app/dist /usr/local/apache2/htdocs/
# EXPOSE 80

FROM node:lts-alpine AS runtime
WORKDIR /app

COPY . .

RUN yarn install
RUN yarn run build

ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000
CMD yarn run preview