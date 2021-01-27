export default `
INSERT INTO library.role(role) VALUES ('ADMIN');
INSERT INTO library.role(role) VALUES ('USER');

INSERT INTO library.user(first_name, last_name, login, password, birth_date, pesel, city, street, house_number)
VALUES ('Jan', 'Kowalski', 'admin', '$2b$10$cXNoxypt1f.e7cV/jCdIjO9d9/j9vUXdUHyMdMHUCzWTkQug9gBom', '12-08-1994', 94081208210, 'Gliwice', 'Kujawska', 2);

INSERT INTO library.user_permission(user_id, role_id)
VALUES (1, 1);

INSERT INTO library.movie(title, year_of_production, director, country, thumbnail)
VALUES ('Gladiator', '2000', 'Ridley Scott', 'USA', 'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'),
  ('American Sniper', '2014', 'Clint Eastwood', 'USA', 'https://m.media-amazon.com/images/M/MV5BMTkxNzI3ODI4Nl5BMl5BanBnXkFtZTgwMjkwMjY4MjE@._V1_.jpg'),
  ('Iron Man 3', '2013', 'Jon Favreau', 'USA', 'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg'),
  ('Iron Man', '2008', 'Jon Favreau', 'USA', 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_.jpg'),
  ('Iron Man 2', '2010', 'Jon Favreau', 'USA', 'https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_.jpg'),
  ('Once Upon a Time in America', '1984', 'Sergio Leone', 'USA', 'https://m.media-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'),
  ('Godzilla vs. Kong', '2021', 'Adam Wingard', 'USA', 'https://m.media-amazon.com/images/M/MV5BZmYzMzU4NjctNDI0Mi00MGExLWI3ZDQtYzQzYThmYzc2ZmNjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg'),
  ('Joker', '2019', 'Todd Phillips', 'USA', 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'),
  ('Avengers: Endgame', '2019', 'Anthony Russo', 'USA', 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg'),
  ('The Wolf of Wall Street', '2013', 'Martin Scorsese', 'USA', 'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg'),
  ('Knives Out', '2019', 'Rian Johnson', 'USA', 'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg'),
  ('Harry Potter and the Sorcerers Stone', '2001', 'Chris Columbus', 'UK/USA', 'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg'),
  ('The Dark Knight', '2008', 'Christopher Nolan', 'UK/USA', 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg'),
  ('Forrest Gump', '1994', 'Robert Zemeckis', 'USA', 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'),
  ('The Godfather', '1972', 'Francis Ford Coppola', 'USA', 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg');


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
  (6, 4),
  (7, 2),
  (8, 8),
  (9, 1),
  (10, 3),
  (11, 17),
  (12, 7),
  (13, 1),
  (14, 5),
  (15, 3);
`;
