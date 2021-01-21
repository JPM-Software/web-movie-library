import { loginUser } from '../controllers/authController';

import { Router } from 'express';

const authRouter = Router();

authRouter.post('/login', loginUser);

export default authRouter;
// const login = {
//   method: 'POST',
//   path: '/login',
//   handler: (request, h) => authController.loginUser(request, h),
//   config: {
//     cors: {
//       origin: ['*'],
//       additionalHeaders: ['cache-control', 'x-requested-with'],
//     },
//   },
// };
