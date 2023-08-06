const express = require("express");
const {
  getAll,
  add,
  deleteById,
  getById,
  updateById,
  updateFavorite,
} = require("../../controllers/contacts");

const { ctrlWrapper } = require("../../helpers");

const { validateBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", ctrlWrapper(getAll));

router.get("/:id", isValidId, ctrlWrapper(getById));

router.post("/", validateBody(schemas.addSchema), ctrlWrapper(add));

router.delete("/:id", isValidId, ctrlWrapper(deleteById));

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.addSchema),
  ctrlWrapper(updateById)
);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(updateFavorite)
);

module.exports = router;
