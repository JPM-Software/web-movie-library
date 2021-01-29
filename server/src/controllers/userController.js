// import dictionary from '../extensions/dictionary';
// import db from '../models';

// async function getUserList(request, resolve) {
//   const config = await dictionary();

//   try {
//     const users = await db.user
//       .findAll({
//         include: [
//           {
//             model: db.userPermissions,
//             include: [
//               {
//                 model: db.role,
//                 as: config.role.tableName,
//               },
//             ],
//           },
//         ],
//       })
//       .then(result => JSON.stringify(result));

//     return resolve.response(users).type('json').code(200);
//   } catch (error) {
//     return resolve.response(error.message).code(500);
//   }
// }

// async function addUser(request, resolve) {
//   const configUser = await dictionary('user');
//   const { userData } = request.payload;
//   try {
//     await db.user
//       .findOrCreate({
//         where: {
//           [configUser.firstName]: userData.firstName,
//           [configUser.lastName]: userData.lastName,
//           [configUser.nick]: userData.nick,
//           [configUser.password]: userData.password,
//           [configUser.dateOfBirth]: new Date(userData.dateOfBirth),
//           [configUser.pesel]: userData.pesel,
//           [configUser.city]: userData.city,
//           [configUser.street]: userData.street,
//           [configUser.flatNumber]: userData.flatNumber,
//         },
//       })
//       .spread((record, created) => {
//         console.log(
//           record.get({
//             plain: true,
//           })
//         );
//         console.log(created);
//       });
//     const configRole = await dictionary('role');
//     const role = await db.role.findOne({
//       where: {
//         [configRole.role]: request.payload.role,
//       },
//     });
//     const user = await db.user.findOne({
//       where: {
//         [configUser.firstName]: userData.firstName,
//         [configUser.lastName]: userData.lastName,
//         [configUser.nick]: userData.nick,
//         [configUser.password]: userData.password,
//         [configUser.dateOfBirth]: new Date(userData.dateOfBirth),
//         [configUser.pesel]: userData.pesel,
//         [configUser.city]: userData.city,
//         [configUser.street]: userData.street,
//         [configUser.flatNumber]: userData.flatNumber,
//       },
//     });
//     const configUserPermissions = await dictionary('userPermissions');
//     await db.userPermissions.findOrCreate({
//       where: {
//         [configUserPermissions.userID]: user.ID,
//         [configUserPermissions.roleID]: role.ID,
//       },
//     });
//     return resolve.response('New user added to database.').type('json').code(200);
//   } catch (error) {
//     return resolve.response(error.message).code(500);
//   }
// }

// async function updateUser(request, resolve) {
//   const config = await dictionary('userPermissions');
//   try {
//     const user = await db.userPermissions.update(
//       {
//         [config.userID]: request.payload.userID,
//         [config.roleID]: request.payload.roleID === 1 ? 2 : 1,
//       },
//       {
//         returning: true,
//         where: {
//           [config.userID]: request.payload.userID,
//           [config.roleID]: request.payload.roleID,
//         },
//       }
//     );
//     return resolve.response(user).type('json').code(200);
//   } catch (error) {
//     return resolve.response(error.message).code(500);
//   }
// }

// async function deleteUser(request, resolve) {
//   const config = await dictionary('user');
//   try {
//     const user = await db.user.destroy({
//       where: {
//         [config.ID]: request.payload.ID,
//       },
//     });
//     return resolve.response(user).type('json').code(200);
//   } catch (error) {
//     return resolve.response(error.message).code(500);
//   }
// }

// async function getSingleUserInfo(request, resolve) {
//   const config = await dictionary('user');
//   try {
//     const user = await db.user.findOne({
//       where: {
//         [config.ID]: request.params.userID,
//       },
//     });
//     return resolve.response(user).type('json').code(200);
//   } catch (error) {
//     return resolve.response(error.message).code(500);
//   }
// }

// export default {
//   getUserList,
//   getSingleUserInfo,
//   addUser,
//   updateUser,
//   deleteUser,
// };
