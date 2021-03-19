FROM node:15.12.0
WORKDIR /usr/src/typescript-clean-architecture-implementation
COPY ./package.json .
RUN npm install --only=prod
COPY ./dist ./dist