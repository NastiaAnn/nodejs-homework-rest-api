const { Contact } = require("../../models/contact");
const { ErrorCatcher, ctrlWrapper } = require("../../helpers");

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    throw ErrorCatcher(404, "Not found");
  }
  res.json(result);
};

module.exports = getById;
