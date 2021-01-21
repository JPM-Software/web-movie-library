// import dictionary from '../extensions/dictionary';
// import db from '../models';

// import Joi from 'joi';

// async function getTypeList(request, resolve) {
//   try {
//     const types = await db.type.findAll({
//       rejectOnEmpty: true,
//     });
//     return resolve.response(types).type('json').code(200);
//   } catch (error) {
//     return resolve.response(error.message).code(500);
//   }
// }

// async function addType(request, resolve) {
//   const config = await dictionary('type');
//   try {
//     const type = await db.type
//       .findOrCreate({
//         where: {
//           [config.typeName]: request.payload.typeName,
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
//     return resolve.response(type).type('json').code(200);
//   } catch (error) {
//     return resolve.response(error.message).code(500);
//   }
// }

// async function updateType(request, resolve) {
//   const config = await dictionary('type');
//   try {
//     const type = await db.type.update(
//       {
//         [config.typeName]: request.payload.typeName,
//       },
//       {
//         returning: true,
//         where: {
//           [config.ID]: request.payload.ID,
//         },
//       }
//     );
//     return resolve.response(type).type('json').code(200);
//   } catch (error) {
//     return resolve.response(error.message).code(500);
//   }
// }

// async function deleteType(request, resolve) {
//   const config = await dictionary('type');
//   try {
//     const type = await db.type.destroy({
//       where: {
//         [config.ID]: request.payload.ID,
//       },
//     });
//     return resolve.response(type).type('json').code(200);
//   } catch (error) {
//     return resolve.response(error.message).code(500);
//   }
// }

// const getTypes = {
//   method: 'GET',
//   path: '/types',
//   handler: (request, h) => getTypeList(request, h),
//   config: {
//     cors: {
//       origin: ['*'],
//       additionalHeaders: ['cache-control', 'x-requested-with'],
//     },
//   },
// };

// const createSingleType = {
//   method: 'POST',
//   path: '/type',
//   handler: (request, h) => addType(request, h),
//   config: {
//     cors: {
//       origin: ['*'],
//       additionalHeaders: ['cache-control', 'x-requested-with'],
//     },
//     validate: {
//       payload: Joi.object({
//         typeName: Joi.string().required(),
//       }),
//     },
//   },
// };

// const updateSingleType = {
//   method: 'PUT',
//   path: '/type',
//   handler: (request, h) => updateType(request, h),
//   config: {
//     cors: {
//       origin: ['*'],
//       additionalHeaders: ['cache-control', 'x-requested-with'],
//     },
//     validate: {
//       payload: Joi.object({
//         ID: Joi.number().required(),
//         typeName: Joi.string().required(),
//       }),
//     },
//   },
// };

// const deleteSingleType = {
//   method: 'DELETE',
//   path: '/type',
//   handler: (request, h) => deleteType(request, h),
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

// export default [getTypes, createSingleType, updateSingleType, deleteSingleType];
