const { isValidObjectId } = require("mongoose");

const { HttpError } = require("../helpers");

const isValidtId = (req, res, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    next(new HttpError(400, `${contactId} is not valid id`));
  }
  next();
};

module.exports = isValidtId;
