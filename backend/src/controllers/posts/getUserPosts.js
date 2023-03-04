const getPostsbyUserId = require("../../repositories/post/getPostsByUserId");

const getUserPosts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userPosts = await getPostsbyUserId(id);

    res.send({
      status: "ok",
      data: userPosts,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getUserPosts;
