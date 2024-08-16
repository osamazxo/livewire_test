const express = require("express");
const { validation } = require("../../middlewares/validation");
const { addProductSchema } = require("./products.validation");
const { addProduct } = require("./products.controller");
const { getProductsSchema } = require("./products.validation");

const { getProducts } = require("./products.controller");

const upload = require("../../middlewares/multer");
const router = express.Router();
router.get("/", validation(getProductsSchema), getProducts);
router.post(
  "/",
  upload.single("img"),
  validation(addProductSchema),
  addProduct
);
module.exports = router;
