# Fetching the minified node image on apline linux
FROM node:lts-bullseye-slim AS build

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

# Setting up the work directory
WORKDIR /api

# Declaring env default
ENV NODE_ENV=development

# COPY package.json
COPY package.json /api

RUN 

# Install Fastify
# RUN yarn global add fastify-cli

# Installing dependencies
RUN npm install

# Copying all the files in our project
COPY . /api

# Exposing server port
EXPOSE 3000

# Starting our application
CMD [ "node", "server.js" ]