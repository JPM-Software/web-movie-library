export default `
INSERT INTO library.role(role) VALUES ('admin');
INSERT INTO library.role(role) VALUES ('user');

INSERT INTO library.user(first_name, last_name, login, password, birth_date, pesel, city, street, house_number)
VALUES ('Jan', 'Kowalski', 'admin', 'admin12', '12-08-1994', 94081208210, 'Gliwice', 'Kujawska', 2);
`;
