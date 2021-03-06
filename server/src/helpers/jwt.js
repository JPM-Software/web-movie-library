import jwt from 'jsonwebtoken';

require('dotenv').config();

const accessTokenSecret = process.env.JWT_SECRET;

export const decodeJWTToken = request => {
  const authHeader = request.headers.authorization;
  const token = authHeader.split(' ')[1];

  return jwt.verify(token, accessTokenSecret);
};

export const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
