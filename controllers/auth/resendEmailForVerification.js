const { User } = require("../../models/user");
const { ErrorCatcher } = require("../../helpers");

const resendEmailForVerification = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw ErrorCatcher(401, "Email not found");
  }

  if (user.verify) {
    throw ErrorCatcher(400, "Verification has already been passed");
  }

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a href="${BASE_URL}/api/auth/verify/${user.verificationCode}">Click to verify email</a> `,
  };
  await sendEmail(verifyEmail);

  res.json({
    message: "Verification email sent",
  });
};
module.exports = resendEmailForVerification;
