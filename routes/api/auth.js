const express = require("express");
const {
  getCurrent,
  login,
  logout,
  register,
} = require("../../controllers/auth");
const { ctrlWrapper } = require("../../helpers");
const { validateBody, authenficate } = require("../../middlewares");
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

module.exports = router;
