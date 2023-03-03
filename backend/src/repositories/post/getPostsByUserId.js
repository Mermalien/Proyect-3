const getDb = require("../../db/getDb");

const getPostsbyUserId = async (req, res, next) => {
  try {
    const db = getDb;

    const [[posts]] = await pool.query(
      "SELECT POSTS FROM posts WHERE USER.ID=? ",
      [req.params.userId]
    );
    res.json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = getPostsbyUserId;
