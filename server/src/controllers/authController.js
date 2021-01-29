import { query } from '../db';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

require('dotenv').config();

const accessTokenSecret = process.env.JWT_SECRET;

const authUser = async (login, password) => {
  const userPasswordHash = await query(`SELECT password FROM library.user WHERE login = $1`, [login]).then(
    res => res.rows[0].password
  );

  if (!bcrypt.compareSync(password, userPasswordHash)) {
    return {
      message: `User doesn't exist or password is wrong`,
      authorized: false,
    };
  }

  const findUserSql = `SELECT * FROM library.user WHERE login = $1`;

  return query(findUserSql, [login])
    .then(async res => {
      const user = res.rows[0] || null;
      const userRole = await query(`SELECT role_id as user_role FROM library.user_permission WHERE user_id = $1`, [
        user?.id,
      ]).then(async res => {
        const roleId = res.rows[0]?.user_role;
        const role = await query(`SELECT role FROM library.role WHERE id = $1`, [roleId]).then(
          res => res.rows[0]?.role
        );
        return role;
      });

      if (!user) {
        return {
          message: `User doesn't exist or password is wrong`,
          authorized: false,
        };
      } else {
        return {
          authorized: true,
          user: { ...user, role: userRole },
        };
      }
    })
    .catch(e => {
      // eslint-disable-next-line
      console.error(e.stack);
    });
};

async function loginUser(request, response) {
  const { login, password } = request.body;

  try {
    const auth = await authUser(login, password);
    if (!auth?.authorized) {
      return response.status(403).send('User does not exist or password is wrong.');
    } else {
      const { user } = auth;
      const accessToken = jwt.sign({ login: user.login, role: user.role, id: user.id }, accessTokenSecret, {
        expiresIn: '20m',
      });

      response.json({ accessToken: accessToken, message: 'User authorized correctly.' });
      response.status(200);
      return response.send();
    }
  } catch (error) {
    return response.status(500).send('Internal server error.');
  }
}

async function registerUser(request, response) {
  const userExist = await query(`SELECT * FROM library.user WHERE login = $1`, [request.body.login]).then(
    res => res.rows[0] || null
  );

  const { first_name, last_name, login, password, birth_date, pesel, city, street, house_number } = request.body;
  const passwordHash = bcrypt.hashSync(password, 10);

  if (userExist) {
    response.status(303);
    response.send('User already exist.');
  } else {
    await query(
      `INSERT INTO library.user(first_name, last_name, login, password, birth_date, pesel, city, street, house_number)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [first_name, last_name, login, passwordHash, birth_date, pesel, city, street, house_number]
    ).then(async () => {
      const userId = await query(`SELECT id FROM library.user WHERE login = $1`, [login]).then(res => res.rows[0]);

      await query(`INSERT INTO library.user_permission(user_id, role_id) VALUES ($1, 2)`, [userId.id]).then(() => {
        response.status(201);
        response.send('User created successfully.');
      });
    });
  }
}

export { loginUser, registerUser };
