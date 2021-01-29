FROM node:14

ENV NODE_ENV=production

RUN mkdir -p /usr/src/client

WORKDIR /usr/src/client

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . /usr/src/client

CMD ["npm", "start"]
