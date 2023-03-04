const selectPosts = require("./selectPosts");
const selectPostById = require("./selectPostById");
const deletePostById = require("./deletePostById");
const updatePostById = require("./updatePostById");
const insertPost = require("./insertPost");
const getPostsByUserId = require("./getPostsByUserId");

module.exports = {
  selectPosts,
  selectPostById,
  deletePostById,
  updatePostById,
  insertPost,
  getPostsByUserId,
};
