import LeftArrow from "@assets/icons/arrow-left.svg?react";
import RightArrow from "@assets/icons/arrow-right.svg?react";
const pagesCount = 12;
const Pagination = () => {
  return (
    <div className=" flex items-center justify-between">
      <button
        aria-label="previous page"
        className="flex gap-[10px] font-normal text-[14px]"
      >
        <LeftArrow />
        Previous
      </button>
      <div className="flex h-[30px]">
        {Array.from({ length: pagesCount }).map((_, index) => (
          <button
            key={"page " + (index + 1)}
            aria-label={"page " + (index + 1)}
            className="flex items-center justify-center size-[30px] text-[14px] font-light hover:border hover:border-[#D9F99D] "
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        aria-label="next page"
        className="flex gap-[10px] font-normal text-[14px]"
      >
        Next <RightArrow />
      </button>
    </div>
  );
};

export default Pagination;
