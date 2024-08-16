const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    favorite: {
      type: Boolean,
      required: true,
      default: false,
    },
    img: {
      type: String,
      required: true,
    },
    seller: {
      name: {
        type: String,
        default: "Josie Parker",
      },
      img: {
        type: String,
        default:
          "https://s3-alpha-sig.figma.com/img/92d0/0d2c/5db05bf878eba0bb6a0084baa24dccea?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ABaCnWLXNk5j6jgF9zLtnzXUnFKKdM1np1mlSG6~FMwn37VabGw0FTOOMeUhyO5QOdEkxkr5Hjuv16Z6GfFGVNoj4SseHPSi4PBySEeTgF0EYMEhlRSAZexN8GVGIQZ2vFIIqF--xpo2iCjXJkKuc7Cwud6gUrTPlM4oPL78tw9QftiwDwvO-j3S1MDNG3JinrtAhZpXxAOyiLP8hpFbkpraCfwVauTM14erySMfBApWSe6cOf4nIYT-ynFIXcz7KkM~cO1urr-5c2t8BsDHB71OIGJYV2U7doz0uYUK5fm2O0GoK6f3zUvMk~Ql6~QDdJjzy8dSgFdXVsIgG9Y9jA__",
      },
    },
  },
  { timestamps: true }
);

module.exports = model("products", productSchema);
