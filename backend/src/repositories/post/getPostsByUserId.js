const getDb = require("../../db/getDb");

const getPostsbyUserId = async (id) => {
  let pool;

  pool = await getDb();

  const [postByUser] = await pool.query(
    `SELECT posts.*, users.id FROM posts LEFT JOIN users on posts.userId=users.id WHERE posts.userId = ?`,
    [id]
  );
  return postByUser;
};

module.exports = getPostsbyUserId;
