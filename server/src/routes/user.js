// import userController from '../controllers/userController.js';

// const getUsers = {
//   method: 'GET',
//   path: '/users',
//   handler: (request, h) => userController.getUserList(request, h),
//   config: {
//     cors: {
//       origin: ['*'],
//       additionalHeaders: ['cache-control', 'x-requested-with'],
//     },
//   },
// };

// const getUserInfo = {
//   method: 'GET',
//   path: '/users/{userID}',
//   handler: (request, h) => userController.getSingleUserInfo(request, h),
//   config: {
//     cors: {
//       origin: ['*'],
//       additionalHeaders: ['cache-control', 'x-requested-with'],
//     },
//   },
// };

// const createSingleUser = {
//   method: 'POST',
//   path: '/user',
//   handler: (request, h) => userController.addUser(request, h),
//   config: {
//     cors: {
//       origin: ['*'],
//       additionalHeaders: ['cache-control', 'x-requested-with'],
//     },
//     validate: {
//       payload: Joi.object({
//         userData: Joi.object({
//           firstName: Joi.string().required(),
//           lastName: Joi.string().required(),
//           nick: Joi.string().required(),
//           password: Joi.string().required(),
//           dateOfBirth: Joi.date().required(),
//           pesel: Joi.number(),
//           city: Joi.string().required(),
//           street: Joi.string(),
//           flatNumber: Joi.number().required(),
//         }),
//         role: Joi.string().required(),
//       }),
//     },
//   },
// };

// const updateSingleUser = {
//   method: 'PUT',
//   path: '/user',
//   handler: (request, h) => userController.updateUser(request, h),
//   config: {
//     cors: {
//       origin: ['*'],
//       additionalHeaders: ['cache-control', 'x-requested-with'],
//     },
//     validate: {
//       payload: Joi.object({
//         userID: Joi.number().required(),
//         roleID: Joi.number().required(),
//       }),
//     },
//   },
// };

// const deleteSingleUser = {
//   method: 'DELETE',
//   path: '/user',
//   handler: (request, h) => userController.deleteUser(request, h),
//   config: {
//     cors: {
//       origin: ['*'],
//       additionalHeaders: ['cache-control', 'x-requested-with'],
//     },
//     validate: {
//       payload: Joi.object({
//         ID: Joi.number().required(),
//       }),
//     },
//   },
// };

// export default [getUsers, getUserInfo, createSingleUser, updateSingleUser, deleteSingleUser];
