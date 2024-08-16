const productsRoutes = require("./modules/products/products.router");
const cors = require("cors");
const { errorHandler } = require("./middlewares/errorHandler");

const appRouter = (app, express) => {
  app.use(cors());
  app.use("/products", productsRoutes);
  app.all("*", (req, res) => {
    return res.status(404).send({ message: "Not found" });
  });
  app.use(errorHandler);
};

module.exports = appRouter;
