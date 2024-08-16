const { asyncHandler } = require("../../middlewares/asyncHandler");
const cloudinary = require("../../utils/cloudinary");
const Product = require("../../../models/products");

const getProducts = asyncHandler(async (req, res) => {
  const SortBy = {
    "name-a": { name: 1 },
    "name-d": { name: -1 },
    "price-a": { price: 1 },
    "price-d": { price: -1 },
  };
  const products = await Product.find(
    { name: { $regex: req.query.search || "", $options: "i" } },
    null,
    {
      limit: 4,
      skip: 4 * (req.query.page || 0),
      sort: req.query.sort ? { ...SortBy[req.query.sort] } : undefined,
    }
  );
  return res.status(200).json({
    success: true,
    products,
  });
});

const addProduct = asyncHandler(async (req, res) => {
  // handle uploading photo to cloudinary
  const uploadResult = await cloudinary.uploader.upload(req.file.path);

  // add product to database
  const product = new Product({
    ...req.body,
    img: uploadResult.url,
    file: undefined,
  });
  await product.save();

  return res.status(200).json({
    success: true,
    product,
  });
});

exports.getProducts = getProducts;
exports.addProduct = addProduct;
