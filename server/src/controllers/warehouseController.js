// import dictionary from '../extensions/dictionary';
// import db from '../models';

// export async function getWarehouseList(request, resolve) {
//   const config = await dictionary();
//   try {
//     const warehouse = await db.warehouse.findAndCountAll({
//       rejectOnEmpty: true,
//       include: [
//         {
//           model: db.opus,
//           as: config.opus.tableName,
//         },
//         {
//           model: db.carrier,
//           as: config.carrier.tableName,
//         },
//       ],
//     });
//     return resolve.response(warehouse).type('json').code(200);
//   } catch (error) {
//     return resolve.response(error.message).code(500);
//   }
// }

// export async function getWarehouseListForOpus(request, resolve) {
//   const config = await dictionary();
//   try {
//     const warehouse = await db.warehouse.findAll({
//       rejectOnEmpty: true,
//       include: [
//         {
//           model: db.carrier,
//           as: config.carrier.tableName,
//         },
//         {
//           model: db.opus,
//           as: config.opus.tableName,
//           where: {
//             [config.opus.ID]: {
//               [db.Op.eq]: request.params.opusID,
//             },
//           },
//         },
//       ],
//     });
//     return resolve.response(warehouse).type('json').code(200);
//   } catch (error) {
//     return resolve.response(error.message).code(500);
//   }
// }

// export async function reserveCarriersList(request, resolve) {
//   const config = await dictionary();
//   try {
//     const promises = await Array.from(request.payload.data).map(async carrier => {
//       await db.warehouse.update(
//         {
//           [config.warehouse.isAvailable]: false,
//         },
//         {
//           where: {
//             [config.warehouse.ID]: carrier.ID,
//             [config.warehouse.opusID]: carrier.DzieloID,
//             [config.warehouse.carrierID]: carrier.NosnikID,
//           },
//         }
//       );
//     });
//     return Promise.all(promises).then(() =>
//       resolve.response('Rezerwacja przebiegła pomyślnie!').type('text').code(200)
//     );
//   } catch (error) {
//     return resolve.response(error.message).code(500);
//   }
// }
