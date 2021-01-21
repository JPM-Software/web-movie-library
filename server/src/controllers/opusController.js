// import dictionary from '../extensions/dictionary';
// import db from '../models';

// export async function getOpusList(request, resolve) {
//   const config = await dictionary();
//   try {
//     const opuses = await db.opusType.findAll({
//       include: [
//         {
//           model: db.opus,
//           as: config.opus.tableName,
//         },
//         {
//           model: db.type,
//           as: config.type.tableName,
//         },
//       ],
//     });
//     return await resolve.response(opuses).type('json').code(200);
//   } catch (error) {
//     return resolve.response(error.message).code(500);
//   }
// }

// export async function getSuggestion(request, resolve) {
//   const configOpus = await dictionary('opus');
//   try {
//     const prop = request.query;
//     let suggestions;
//     if (prop.title) {
//       suggestions = await db.opus.findAll({
//         where: {
//           [configOpus.title]: {
//             [db.Op.iLike]: `%${prop.title}%`,
//           },
//         },
//       });
//     } else if (prop.director) {
//       suggestions = await db.opus.findAll({
//         where: {
//           [configOpus.director]: {
//             [db.Op.iLike]: `%${prop.director}%`,
//           },
//         },
//       });
//     }
//     return await resolve.response(suggestions).type('json').code(200);
//   } catch (error) {
//     return resolve.response(error.message).code(500);
//   }
// }

// export async function getFilteredOpuses(request, resolve) {
//   const config = await dictionary();
//   try {
//     console.log(request.payload);
//     const { title, director, type, yearFrom, yearTo } = request.payload.data;
//     const filtered = await db.opusType.findAll({
//       include: [
//         {
//           model: db.opus,
//           as: config.opus.tableName,
//           where: {
//             [config.opus.title]: {
//               [db.Op.iLike]: `%${title}%`,
//             },
//             [config.opus.director]: {
//               [db.Op.iLike]: `%${director}%`,
//             },
//             [config.opus.yearOfProduction]: {
//               [db.Op.not]: null,
//               [db.Op.and]: [{ [db.Op.gte]: yearFrom }, { [db.Op.lte]: yearTo }],
//             },
//           },
//         },
//         {
//           model: db.type,
//           as: config.type.tableName,
//           where: {
//             [config.type.typeName]: {
//               [db.Op.iLike]: `%${type}%`,
//             },
//           },
//         },
//       ],
//     });
//     return await resolve.response(filtered).type('json').code(200);
//   } catch (error) {
//     return resolve.response(error.message).code(500);
//   }
// }
