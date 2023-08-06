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

const { validateBody, isValidId, authenficate } = require("../../middlewares");
const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", authenficate, ctrlWrapper(getAll));

router.get("/:id", authenficate, isValidId, ctrlWrapper(getById));

router.post(
  "/",
  authenficate,
  validateBody(schemas.addSchema),
  ctrlWrapper(add)
);

router.delete("/:id", authenficate, isValidId, ctrlWrapper(deleteById));

router.put(
  "/:id",
  authenficate,
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
