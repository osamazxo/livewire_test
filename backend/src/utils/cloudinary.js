const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dgzidhagy",
  api_key: "953822957772112",
  api_secret: process.env.CLOUD_SECRET,
});

module.exports = cloudinary;
