import DBPool from '../db';

const authUser = async (login, password) => {
  console.log(login, password);
  const findUserSql = `SELECT * FROM library.user WHERE login = $1 AND password = $2`;

  const user = await DBPool.query(findUserSql, [login, password], (err, res) => {
    if (err) {
      console.log('Error:', err.stack);
    } else {
      return res.rows[0];
    }
  });
  console.log('🚀 ~ file: authController.js ~ line 7 ~ authUser ~ user', user);

  if (!user) {
    return {
      message: `User doesn't exist or password is wrong`,
      authorized: false,
    };
  } else {
    return {
      authorized: true,
    };
  }
};

async function loginUser(request, response) {
  const { login, password } = request.body;
  try {
    const auth = await authUser(login, password);
    if (!auth.authorized) {
      return response.status(403).send('User is not authorized.');
    }
    return response.status(200).json(auth).send('User authorized correctly.');
  } catch (error) {
    return response.status(500).send('Internal error');
  }
}

export { loginUser };
