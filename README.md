# web-movie-library
Semestral project


## Requirements

  - `node.js v.14+` - [Download available here](https://nodejs.org/en/)

  - any browser e.g. Google Chrome

  - `docker` and `docker-compose` - [docker installation](https://docs.docker.com/get-docker/) and [docker-compose installation](https://docs.docker.com/compose/install/)

## Instalation

Install each part of project separately. It means go to `/client` and type in terminal:
```javascript
npm install
```
Remember about version of `node.js`, it must be at least `14 LTS`.

Same with server part, go to `/server` and type:
```javascript
npm install
```

When installation finish, you have to set environmental variables for each part `client` and `server`.
Every part has a file `.env.template` which is a template for `.env` file. Just copy content and create new file with name `.env`. Paste inside content and set all variables as you need.

Than you have to go to main directory and type in terminal:

```javascript
docker-compose build
```

Wait for successfull build of client and server.

After that run docker containers.
```javascript
docker-compose up -d
```

App should be available on localhost with port that you set in `.env` file.