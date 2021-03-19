FROM node:15
WORKDIR /usr/src/typescript-clean-architecture-implementation
COPY ./package.json .
RUN npm install --only=prod
COPY ./dist ./dist
EXPOSE 5000
CMD npm run start