const getDb = require("../../db/getDb");

const selectPosts = async (queryParams) => {
  const pool = getDb();
  let sqlQuery =
    "SELECT p.*, COUNT(l.id) likes FROM posts p LEFT JOIN likes l ON p.id = l.postId";
  
  let values = [];
  let clause = "WHERE";

  
  for (const key in queryParams) {
    
    const value = queryParams[key];
    
    sqlQuery += ` ${clause} ${key} LIKE ?`;
    
    values.push(`%${value}%`);

    clause = "AND";
  }

  sqlQuery += " GROUP BY p.id;";

  const [posts] = await pool.query(sqlQuery, values);

  return posts;
};

module.exports = selectPosts;
