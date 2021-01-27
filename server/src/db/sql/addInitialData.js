export default `
INSERT INTO library.role(role) VALUES ('ADMIN');
INSERT INTO library.role(role) VALUES ('USER');

INSERT INTO library.user(first_name, last_name, login, password, birth_date, pesel, city, street, house_number)
VALUES ('Jan', 'Kowalski', 'admin', '$2b$10$cXNoxypt1f.e7cV/jCdIjO9d9/j9vUXdUHyMdMHUCzWTkQug9gBom', '12-08-1994', 94081208210, 'Gliwice', 'Kujawska', 2);

INSERT INTO library.user_permission(user_id, role_id)
VALUES (1, 1);

INSERT INTO library.movie(title, year_of_production, director, country)
VALUES ('Gladiator', '2000', 'Ridley Scott', 'USA'),
  ('American Sniper', '2014', 'Clint Eastwood', 'USA'),
  ('Iron Man 3', '2013', 'Jon Favreau', 'USA'),
  ('Iron Man', '2008', 'Jon Favreau', 'USA'),
  ('Iron Man 2', '2010', 'Jon Favreau', 'USA'),
  ('Once Upon a Time in America', '1984', 'Sergio Leone', 'USA');


INSERT INTO library.type(type_name)
VALUES ('Action'),
  ('Sci-Fi'),
  ('Drama'),
  ('Crime'),
  ('Romance'),
  ('Short'),
  ('Family'),
  ('Thriller'),
  ('Adventure'),
  ('History'),
  ('Animation'),
  ('Musical'),
  ('Western'),
  ('Horror'),
  ('Documentary'),
  ('Adult'),
  ('Comedy');

INSERT INTO library.movie_type(movie_id, type_id)
VALUES (1, 2),
  (2, 1),
  (3, 1),
  (4, 1),
  (5, 1),
  (6, 4);
`;
