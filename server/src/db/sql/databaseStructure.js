export default `
CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
DROP EXTENSION plpgsql;

CREATE SCHEMA IF NOT EXISTS library;
ALTER USER admin SET search_path = library;
GRANT ALL ON SCHEMA library TO admin;

DROP TABLE IF EXISTS library.user CASCADE;
CREATE TABLE IF NOT EXISTS library.user (
  id SERIAL NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  login VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  birth_date DATE,
  pesel BIGINT,
  city VARCHAR(255) ,
  street VARCHAR(255),
  house_number INTEGER
);
ALTER TABLE library.user ADD CONSTRAINT user_id PRIMARY KEY (id);

DROP TABLE IF EXISTS library.movie CASCADE;
CREATE TABLE IF NOT EXISTS library.movie (
  id SERIAL NOT NULL,
  title VARCHAR(255) NOT NULL,
  year_of_production VARCHAR(255) NOT NULL,
  director VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  thumbnail VARCHAR(255) NOT NULL
);
ALTER TABLE library.movie ADD CONSTRAINT movie_id PRIMARY KEY (id);

DROP TABLE IF EXISTS library.type CASCADE;
CREATE TABLE IF NOT EXISTS library.type (
  id SERIAL NOT NULL,
  type_name VARCHAR(255) NOT NULL
);
ALTER TABLE library.type ADD CONSTRAINT type_id PRIMARY KEY (id);

DROP TABLE IF EXISTS library.movie_type CASCADE;
CREATE TABLE IF NOT EXISTS library.movie_type (
  id SERIAL NOT NULL,
  movie_id INTEGER NOT NULL,
  type_id INTEGER NOT NULL,
  FOREIGN KEY (movie_id) REFERENCES library.movie(id) ON DELETE CASCADE,
  FOREIGN KEY (type_id) REFERENCES library.type(id) ON DELETE CASCADE
);
ALTER TABLE library.movie_type ADD CONSTRAINT movie_type_id PRIMARY KEY (id);

DROP TABLE IF EXISTS library.favourite_movie CASCADE;
CREATE TABLE IF NOT EXISTS library.favourite_movie (
  id SERIAL NOT NULL,
  user_id INTEGER NOT NULL,
  movie_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES library.user(id) ON DELETE CASCADE,
  FOREIGN KEY (movie_id) REFERENCES library.movie(id) ON DELETE CASCADE
);
ALTER TABLE library.favourite_movie ADD CONSTRAINT favourite_movie_id PRIMARY KEY (id);

DROP TABLE IF EXISTS library.role CASCADE;
CREATE TABLE IF NOT EXISTS library.role (
  id SERIAL NOT NULL,
  role VARCHAR(255) NOT NULL
);
ALTER TABLE library.role ADD CONSTRAINT role_id PRIMARY KEY (id);

DROP TABLE IF EXISTS library.user_permission CASCADE;
CREATE TABLE IF NOT EXISTS library.user_permission (
  id SERIAL NOT NULL,
  user_id INTEGER NOT NULL,
  role_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES library.user(id) ON DELETE CASCADE,
  FOREIGN KEY (role_id) REFERENCES library.role(id) ON DELETE CASCADE
);
ALTER TABLE library.user_permission ADD CONSTRAINT user_permission_id PRIMARY KEY (id);
`;
