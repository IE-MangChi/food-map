const { pool } = require("../../config/database");

exports.selectrestaurants = async function (connection, category) {
  const selectAllQuery = 'select title, address, category, videoUrl from MapDB.restaurants where status = "A"';
  const selectcategoryQuery = 'select title, address, category, videoUrl from MapDB.restaurants where status = "A" and category = ?';
  const Params = [category];

  const Query = category ? selectcategoryQuery : selectAllQuery;

  const rows = await connection.query(Query, Params);

  return rows;
};

exports.exampleDao = async function (connection, params) {
  const Query = ``;
  const Params = [];

  const rows = await connection.query(Query, Params);

  return rows;
};