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
  birth_date DATE NOT NULL,
  pesel BIGINT,
  city VARCHAR(255) NOT NULL,
  street VARCHAR(255),
  house_number INTEGER NOT NULL
);
ALTER TABLE library.user ADD CONSTRAINT user_id PRIMARY KEY (id);

DROP TABLE IF EXISTS library.actor CASCADE;
CREATE TABLE IF NOT EXISTS library.actor (
  id SERIAL NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  birth_date DATE,
  height INTEGER
);
ALTER TABLE library.actor ADD CONSTRAINT actor_id PRIMARY KEY (id);

DROP TABLE IF EXISTS library.opus CASCADE;
CREATE TABLE IF NOT EXISTS library.opus (
  id SERIAL NOT NULL,
  title VARCHAR(255) NOT NULL,
  year_of_production DATE NOT NULL,
  director VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL
);
ALTER TABLE library.opus ADD CONSTRAINT opus_id PRIMARY KEY (id);

DROP TABLE IF EXISTS library.type CASCADE;
CREATE TABLE IF NOT EXISTS library.type (
  id SERIAL NOT NULL,
  type_name VARCHAR(255) NOT NULL
);
ALTER TABLE library.type ADD CONSTRAINT type_id PRIMARY KEY (id);

DROP TABLE IF EXISTS library.opus_type CASCADE;
CREATE TABLE IF NOT EXISTS library.opus_type (
  id SERIAL NOT NULL,
  opus_id INTEGER NOT NULL,
  type_id INTEGER NOT NULL,
  FOREIGN KEY (opus_id) REFERENCES library.opus(id) ON DELETE CASCADE,
  FOREIGN KEY (type_id) REFERENCES library.type(id) ON DELETE CASCADE
);
ALTER TABLE library.opus_type ADD CONSTRAINT opus_type_id PRIMARY KEY (id);

DROP TABLE IF EXISTS library.user_rating CASCADE;
CREATE TABLE IF NOT EXISTS library.user_rating (
  id SERIAL NOT NULL,
  user_id INTEGER NOT NULL,
  opus_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES library.user(id) ON DELETE CASCADE,
  FOREIGN KEY (opus_id) REFERENCES library.opus(id) ON DELETE CASCADE
);
ALTER TABLE library.user_rating ADD CONSTRAINT user_rating_id PRIMARY KEY (id);

DROP TABLE IF EXISTS library.carrier CASCADE;
CREATE TABLE IF NOT EXISTS library.carrier (
  id SERIAL NOT NULL,
  type VARCHAR(255) NOT NULL
);
ALTER TABLE library.carrier ADD CONSTRAINT carrier_id PRIMARY KEY (id);

DROP TABLE IF EXISTS library.cast CASCADE;
CREATE TABLE IF NOT EXISTS library.cast (
  id SERIAL NOT NULL,
  opus_id INTEGER NOT NULL,
  actor_id INTEGER NOT NULL,
  FOREIGN KEY (actor_id) REFERENCES library.actor(id) ON DELETE CASCADE,
  FOREIGN KEY (opus_id) REFERENCES library.opus(id) ON DELETE CASCADE
);
ALTER TABLE library.cast ADD CONSTRAINT cast_id PRIMARY KEY (id);

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
