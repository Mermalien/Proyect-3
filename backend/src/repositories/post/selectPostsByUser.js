const getPool = require("../../database/getPool");

const selectPostsByUser = async (user) => {
  const [post] = await getPool.query("SELECT posts FROM POSTS WHERE user=?", [
    user,
  ]);
  return post;
};

module.exports = selectPostsByUser;
