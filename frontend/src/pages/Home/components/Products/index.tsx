import HeartIcon from "@assets/icons/heart.svg?react";
const products: {
  _id: string;
  name: string;
  price: number;
  img: string;
  favorite: boolean;
  seller: {
    name: string;
    img: string;
  };
}[] = [
  {
    _id: "1",
    name: "Product name",
    price: 30.0,
    favorite: false,
    img: "https://s3-alpha-sig.figma.com/img/51d3/cbc3/b1d8bef0f98c2c1ca65646437d4ef615?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dNp4h7JtwrcToGj2Rw3w9S8AzfY~ITyDooDRqoPqKzD-O51-3Gjs1IHp1Z2Pg-5iUsYykzBGVLiDYvqIAJJReUatCW-6JJQqsee7JgbhOsTXLCAFryBiU9KpXdkxjwVqgEbcmpP507s7~1sQ9yE~4MV4rQxqzKkR3I71XsEvnTwj8Y5x1q6eOBCpUiBmEhIfiiwC13S1aSZn1m8CikvchY0MyuD72twP6dDng1p4BoLAAy-EqOVnasPyP9LQDOT5NqxWfxBGgEwn-p0ZhjccfdSX1C0-xzsPNRgDPen6n2spM9OL3invVHvOnz5L7kjK1Z6AN1pywI6X3ba7GvW1Pg__",
    seller: {
      name: "Josie Parker",
      img: "https://s3-alpha-sig.figma.com/img/92d0/0d2c/5db05bf878eba0bb6a0084baa24dccea?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ABaCnWLXNk5j6jgF9zLtnzXUnFKKdM1np1mlSG6~FMwn37VabGw0FTOOMeUhyO5QOdEkxkr5Hjuv16Z6GfFGVNoj4SseHPSi4PBySEeTgF0EYMEhlRSAZexN8GVGIQZ2vFIIqF--xpo2iCjXJkKuc7Cwud6gUrTPlM4oPL78tw9QftiwDwvO-j3S1MDNG3JinrtAhZpXxAOyiLP8hpFbkpraCfwVauTM14erySMfBApWSe6cOf4nIYT-ynFIXcz7KkM~cO1urr-5c2t8BsDHB71OIGJYV2U7doz0uYUK5fm2O0GoK6f3zUvMk~Ql6~QDdJjzy8dSgFdXVsIgG9Y9jA__",
    },
  },
];
const Products = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((ele) => (
        <div key={ele._id}>
          <img
            src={ele.img}
            alt={ele.name}
            className="h-[326px] w-full object-cove rounded"
          />
          <div className="flex justify-between mt-2">
            <div>
              <p className="text-[13px] font-light">{ele.name}</p>
              <p className="text-[16px] font-normal">
                £
                {ele.price.toLocaleString("en-us", {
                  minimumFractionDigits: 2,
                })}
              </p>
              <div className="flex items-center gap-[5px] mt-1">
                <img
                  src={ele.seller.img}
                  alt={ele.seller.name}
                  className="size-[20px] rounded-full object-cover"
                />
                <p className="font-normal text-[10px]">{ele.seller.name}</p>
              </div>
            </div>
            <button
              aria-label="add to favorite"
              className="flex border border-[#E5E5E5] rounded h-fit p-[6px] hover:border-[#D9F99D]"
            >
              <HeartIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
