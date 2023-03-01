const getDb = require("../../db/getDb");

const selectPosts = async (queryParams, currentUser) => {
  const pool = getDb();
  let sqlQuery = currentUser
    ? "SELECT p.*, COUNT(l.id) likes, (SELECT COUNT(likes.id) FROM likes WHERE likes.postId=p.id AND likes.userId = ?) as userLike FROM posts p LEFT JOIN likes l ON p.id = l.postId"
    : "SELECT p.*, COUNT(l.id) likes FROM posts p LEFT JOIN likes l ON p.id = l.postId";

  let values = currentUser ? [currentUser.id] : [];
  let clause = "WHERE";

  for (const key in queryParams) {
    const value = queryParams[key];

    sqlQuery += ` ${clause} ${key} LIKE ?`;

    values.push(`%${value}%`);

    clause = "AND";
  }

  sqlQuery += " GROUP BY p.id ORDER BY p.date_creation DESC;";

  const [posts] = await pool.query(sqlQuery, values);

  return posts;
};

module.exports = selectPosts;
