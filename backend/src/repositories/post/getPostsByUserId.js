const getDb = require("../../db/getDb");

const getPostsbyUserId = async (id) => {
  let pool;
  try {
    pool = await getDb();

    const [[postByUser]] = await pool.query(
      `SELECT posts, users.id FROM posts LEFT JOIN users on posts.user_id WHERE posts.user_id = ?`,
      [id]
    );
    return postByUser;
  } finally {
    if (pool) pool.release();
  }
};

module.exports = getPostsbyUserId;
