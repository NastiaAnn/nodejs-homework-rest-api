const Jimp = require("jimp");

const imageSizeChanger = async (resultUpload) => {
  try {
    const avatarImage = await Jimp.read(resultUpload);
    await avatarImage.resize(250, 250);
    await avatarImage.write(resultUpload);
  } catch (error) {
    res.status(500).json({
      message: "Error processing and resizing avatar",
    });
  }
};

module.exports = imageSizeChanger;
