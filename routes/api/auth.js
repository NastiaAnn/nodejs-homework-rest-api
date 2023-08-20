const express = require("express");
const {
  getCurrent,
  login,
  logout,
  register,
  updateAvatar,
} = require("../../controllers/auth");
const { ctrlWrapper } = require("../../helpers");
const { validateBody, authenficate, upload } = require("../../middlewares");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctrlWrapper(register)
);
router.post("/login", validateBody(schemas.loginSchema), ctrlWrapper(login));
router.get("/current", authenficate, ctrlWrapper(getCurrent));
router.post("/logout", authenficate, ctrlWrapper(logout));
router.patch(
  "/avatars",
  authenficate,
  upload.single("avatar"),
  ctrlWrapper(updateAvatar)
);

module.exports = router;
