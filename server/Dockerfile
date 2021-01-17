FROM node:14

ENV NODE_ENV=production

RUN mkdir -p /usr/src/backend

WORKDIR /usr/src/backend

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . /usr/src/backend

EXPOSE 3001

CMD [ "npm", "start" ]
