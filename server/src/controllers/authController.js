import { query } from '../db';

const authUser = async (login, password) => {
  const findUserSql = `SELECT * FROM library.user WHERE login = $1 AND password = $2`;

  return query(findUserSql, [login, password])
    .then(res => {
      if (!res.rows[0]) {
        return {
          message: `User doesn't exist or password is wrong`,
          authorized: false,
        };
      } else {
        return {
          authorized: true,
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
    if (!auth.authorized) {
      return response.status(403).send('User does not exist or password is wrong.');
    } else {
      return response.status(200).send('User authorized correctly.');
    }
  } catch (error) {
    return response.status(500).send('Internal server error.');
  }
}

export { loginUser };
