const jwt = require("jsonwebtoken");
const { generateError } = require("../utils");

const optionalAuth = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return next();
    }

    const [type, token] = authorization.split(" ");

    if (type !== "Bearer" || !token) {
      return next();
    }

    const tokenPayLoad = jwt.verify(token, process.env.JWT_SECRET);

    req.auth = tokenPayLoad;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = optionalAuth;
