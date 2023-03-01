const selectUserById = require("../../repositories/users/selectUserById");

const getMe = async (req, res, next) => {
  try {
    const user = await selectUserById(req.userId);
    res.send({
      status: "ok",
      data: [user],
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getMe;
