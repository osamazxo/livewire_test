import { useGetProducts } from "@api/products";
import HeartIcon from "@assets/icons/heart.svg?react";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [params] = useSearchParams();
  const { data: products } = useGetProducts({
    page: params.get("page") ? Number(params.get("page")) - 1 : 0,
    search: params.get("search") ? params.get("search") : undefined,
    sort: params.get("sort") ? params.get("sort") : undefined,
  });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products?.map((ele) => (
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
