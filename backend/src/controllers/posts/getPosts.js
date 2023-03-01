const { selectPosts } = require("../../repositories/post");
const { filterPostsSchema } = require("../../schemas/posts");

const getPosts = async (req, res, next) => {
  try {
    await filterPostsSchema.validateAsync(req.query);

    const posts = await selectPosts(req.query, req.auth); //pendiente berto
    res
      .status(200)
      .send({ status: "Publicaciones de nuestros usuarios:", data: posts });
  } catch (error) {
    next(error);
  }
};

module.exports = getPosts;
