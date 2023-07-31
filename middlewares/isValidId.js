const { isValidObjectId } = require("mongoose");

const { ErrorCatcher } = require("../helpers");

const isValidId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    next(ErrorCatcher(400, `${id} is not valid id`));
  }
  next();
};

module.exports = isValidId;
