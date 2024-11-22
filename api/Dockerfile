# temporary image
FROM node:lts-bullseye-slim AS build
ENV NODE_ENV development
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init
WORKDIR /api
COPY package.json /api
RUN npm install
RUN npm ci --only=production

# production image
FROM node:lts-bullseye-slim
ENV NODE_ENV production
COPY --from=build /usr/bin/dumb-init /usr/bin/dumb-init
USER node
WORKDIR /api
COPY --chown=node:node --from=build /api/node_modules /api/node_modules
COPY --chown=node:node . /api
EXPOSE 3000
CMD ["dumb-init", "node", "server.js"]
