# Fetching the minified node image on apline linux
FROM node:slim

# Setting up the work directory
WORKDIR /api

# Declaring env
ENV NODE_ENV=development

# COPY package.json
COPY package.json /api

# Install Fastify
RUN yarn global add fastify-cli

# Installing dependencies
RUN yarn install

# Copying all the files in our project
COPY . /api

# Exposing server port
EXPOSE 3000

# Starting our application
CMD [ "fastify", "start", "-l", "info", "app.js" ]