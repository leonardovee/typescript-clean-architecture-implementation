FROM node:15.12.0
WORKDIR /usr/src/typescript-clean-architecture-implementation
COPY ./package.json .
RUN npm install --only=prod --force
COPY ./dist ./dist
EXPOSE 5000
CMD npm run start