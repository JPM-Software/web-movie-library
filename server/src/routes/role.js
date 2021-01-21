// import db from '../models';

// async function getRolesList(request, resolve) {
//   try {
//     const roles = await db.role.findAll({
//       rejectOnEmpty: true,
//     });
//     return resolve.response(roles).type('json').code(200);
//   } catch (error) {
//     return resolve.response(error.message).code(500);
//   }
// }

// const getRoles = {
//   method: 'GET',
//   path: '/roles',
//   handler: (request, h) => getRolesList(request, h),
//   config: {
//     cors: {
//       origin: ['*'],
//       additionalHeaders: ['cache-control', 'x-requested-with'],
//     },
//   },
// };

// export default [getRoles];
