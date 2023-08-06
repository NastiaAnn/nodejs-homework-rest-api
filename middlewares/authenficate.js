require("dotenv").config();
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const { ErrorCatcher } = require("../helpers");
const { SECRET_KEY } = process.env;

const authenficate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    next(ErrorCatcher(401, "Not authorized"));
  }

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);

    if (!user) {
      next(ErrorCatcher(401, "Not authorized"));
    }
    req.user = user;
    next();
  } catch {
    next(ErrorCatcher(401, "Not authorized"));
  }
};

module.exports = authenficate;
