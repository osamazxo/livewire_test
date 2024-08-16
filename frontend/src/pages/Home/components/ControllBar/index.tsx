import SearchIcon from "@assets/icons/search.svg?react";
import PlusIcon from "@assets/icons/plus.svg?react";
import AddProductForm from "./AddProductForm";
import { useState } from "react";
const sortOptions: { name: string; title: string }[] = [
  {
    name: "name-a",
    title: "A - Z",
  },
  {
    name: "name-d",
    title: "Z - A",
  },
  {
    name: "price-a",
    title: "Price: Low to High",
  },
  {
    name: "price-d",
    title: "Price: High to Low",
  },
];
const ControllBar = () => {
  const [formOpened, setFormOpened] = useState(false);
  const [sortMenuOpened, setSortMenuOpened] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="relative max-w-[528.68px] min-w-[200px] flex-1 rounded">
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="border rounded border-[#E5E5E5] w-full h-[44px] pr-[46px] pl-[13px] focus:outline-none focus:border-[#D9F99D] hover:border-[#D9F99D] "
          />
          <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2" />
        </div>
        <div className="flex gap-4 flex-wrap">
          <div className="flex gap-3 items-center flex-1 sm:flex-none">
            <p className="leading-[22px] font-normal text-[14px] text-nowrap">
              Sort By
            </p>
            <div className="relative flex-1 sm:flex-none">
              <button
                onClick={() => setSortMenuOpened((old) => !old)}
                className="h-[44px] rounded border border-[#E5E5E5] hover:border-[#D9F99D] px-[13px] py-[11px] min-w-[202.11px] w-full flex items-center text-[#737373] text-[14px] font-normal"
              >
                Sort By
              </button>
              {sortMenuOpened && (
                <div className="absolute top-[46px] w-full border border-[#E4E4E4] rounded px-[11px] py-[15px]">
                  {sortOptions.map((ele) => (
                    <div
                      key={ele.name}
                      className="select-none cursor-pointer hover:text-[#8eb14e]"
                    >
                      {ele.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <button
            className="flex items-center py-[11px] px-[23px] gap-[10px] rounded bg-[#D9F99D] hover:bg-[#9ab862] transition-all flex-1 sm:flex-none text-[14px] font-normal leading-[22px]"
            onClick={() => setFormOpened(true)}
          >
            <PlusIcon />
            Sell item
          </button>
        </div>
      </div>
      <AddProductForm opened={formOpened} setOpened={setFormOpened} />
    </>
  );
};

export default ControllBar;
