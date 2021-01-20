export default `
CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
DROP EXTENSION plpgsql;
CREATE TABLE public."actors" (
    actor_id serial PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    birthdate date,
    height integer
);
`;
