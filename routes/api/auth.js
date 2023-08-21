const express = require("express");
const {
  getCurrent,
  login,
  logout,
  register,
  updateAvatar,
  verifyEmail,
  resendEmailForVerification,
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
router.get("/verify/:verificationCode", ctrlWrapper(verifyEmail));
router.post(
  "/verify",
  validateBody(schemas.emailSchema),
  ctrlWrapper(resendEmailForVerification)
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
