FROM node:14

ENV NODE_ENV=production

RUN mkdir -p /usr/src/server

WORKDIR /usr/src/server

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . /usr/src/server

EXPOSE 3001

CMD [ "npm", "start" ]
