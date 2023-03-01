const getDb = require("../../db/getDb");

const selectPostById = async (postId) => {
  const pool = getDb();

  const [[post]] = await pool.query(
    "SELECT posts.*, COUNT(likes.id) AS likes FROM posts LEFT JOIN likes ON posts.id = likes.postId WHERE posts.id = ? GROUP BY posts.id",
    [postId]
  );

  return post;
};

module.exports = selectPostById;
