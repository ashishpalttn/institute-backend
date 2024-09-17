// const pool = require('../config/db');

// const createEvent = async (event) => {
//   const { name, type, startDate, endDate, logoUrl, head, contactNo, contactEmail } = event;
//   const result = await pool.query(
//     'INSERT INTO events (name, type, startDate, endDate, logoUrl, head, contactNo, contactEmail) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
//     [name, type, startDate, endDate, logoUrl, head, contactNo, contactEmail]
//   );
//   return result.rows[0];
// };

// module.exports = {
//   createEvent,
// };
