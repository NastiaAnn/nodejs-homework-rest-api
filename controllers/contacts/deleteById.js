const { Contact } = require("../../models/contact");
const { ErrorCatcher } = require("../../helpers");

const deleteById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndDelete(id);
  if (!result) {
    throw ErrorCatcher(404, "Not found");
  }
  res.status(200).json({ message: "contact deleted" });
};

module.exports = deleteById;
