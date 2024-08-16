import { Modal } from "@ui/Modal";
import CloseIcon from "@assets/icons/x.svg?react";
import PoundIcon from "@assets/icons/currency-pound-1.svg?react";
import ChevronDown from "@assets/icons/chevron-down.svg?react";
import { useState } from "react";
import { useFormik } from "formik";
import { useAddProduct } from "@api/products";
const categories: { name: string; title: string }[] = [
  { name: "men", title: "Men" },
  { name: "women", title: "Women" },
  { name: "children", title: "Children" },
];
const AddProductForm = ({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: (val: boolean) => void;
}) => {
  const [categoryMenuOpened, setCategoryMenuOpened] = useState(false);
  const [progress, setProgree] = useState<null | number>(null);
  const { mutate: addProduct, isPending } = useAddProduct({
    onSuccess: () => {
      setOpened(false);
    },
  });
  const formik = useFormik<{
    name: string;
    price: string;
    description: string;
    category: string;
    img?: File;
  }>({
    initialValues: {
      name: "",
      description: "",
      price: "",
      category: "",
      img: undefined,
    },
    onSubmit(values) {
      addProduct({
        product: values,
        getProgress: (prog) => setProgree(prog || 0),
      });
    },
  });
  return (
    <Modal opened={opened} setOpened={setOpened}>
      <button
        aria-label="close dialog"
        onClick={() => setOpened(false)}
        className="flex h-fit absolute top-3 right-6 z-[10005] bg-white"
      >
        <CloseIcon />
      </button>
      <div className="p-[50px] w-[300px] sm:w-[500px] md:w-[600px] lg:w-[784px] max-h-[80vh] overflow-y-auto">
        <p className="text-[30px] leading-[34px] font-bold mb-[30px]">
          Sell an item
        </p>
        <form
          className="flex flex-col gap-[20px]"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex-1">
            <label
              htmlFor="photos"
              className="text-[14px] font-normal leading-[22px] mb-1 block"
            >
              Upload Photos
            </label>
            <div className="flex items-center justify-center gap-4 flex-wrap border border-[#E5E5E5] rounded-[3px] h-[181.27px]">
              <label
                aria-label="upload photos"
                htmlFor="photos"
                tabIndex={1}
                className="flex items-center cursor-pointer py-[11px] px-[23px] border border-[#D9F99D] rounded text-[14px] font-normal leading-[22px]"
              >
                Upload Photo
              </label>
              {formik.values.img && (
                <img
                  src={URL.createObjectURL(formik.values.img as File)}
                  alt="product image"
                  className="size-[100px] rounded"
                />
              )}
              <input
                type="file"
                name="photos"
                id="photos"
                hidden
                accept="image/*"
                onChange={(e) =>
                  formik.setFieldValue("img", e.target.files?.[0])
                }
              />
            </div>
          </div>
          <div className="flex-1">
            <label
              htmlFor="title"
              className="text-[14px] font-normal leading-[22px] mb-1 block"
            >
              Title
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="px-4 w-full border border-[#E5E5E5] rounded-[3px] h-[44px] hover:border-[#D9F99D] focus:outline-none focus:border-[#D9F99D]"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor=""
              className="text-[14px] font-normal leading-[22px] mb-1 block"
            >
              Describe your item
            </label>
            <textarea
              name="description"
              id="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              className="p-4 w-full border border-[#E5E5E5] rounded-[3px] h-[148.54px] hover:border-[#D9F99D] focus:outline-none focus:border-[#D9F99D] resize-none"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="category"
              className="text-[14px] font-normal leading-[22px] mb-1 block"
            >
              Category
            </label>
            <div className="relative flex-1 sm:flex-none">
              <button
                type="button"
                id="category"
                onClick={() => setCategoryMenuOpened((old) => !old)}
                className="relative h-[44px] rounded border border-[#E5E5E5] hover:border-[#D9F99D] px-[13px] py-[11px] min-w-[202.11px] w-full flex items-center text-[#737373] text-[14px] font-normal"
              >
                {formik.values.category === ""
                  ? "Select"
                  : formik.values.category}
                <ChevronDown
                  className={
                    "absolute right-3 top-1/2 -translate-y-1/2 " +
                    (categoryMenuOpened ? "rotate-180" : "")
                  }
                />
              </button>
              {categoryMenuOpened && (
                <div className="absolute top-[46px] w-full bg-white border border-[#E4E4E4] rounded px-[11px] py-[15px] z-[2000]">
                  {categories.map((ele) => (
                    <div
                      key={ele.name}
                      className="text-[14px] font-light select-none cursor-pointer hover:text-[#8eb14e]"
                      onClick={() => {
                        formik.setFieldValue("category", ele.name);
                        setCategoryMenuOpened(false);
                      }}
                    >
                      {ele.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex-1">
            <label
              htmlFor="price"
              className="text-[14px] font-normal leading-[22px] mb-1 block"
            >
              Item price
            </label>
            <div className="relative">
              <input
                type="text"
                name="price"
                id="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                className="w-full border border-[#E5E5E5] rounded-[3px] h-[44px] hover:border-[#D9F99D] focus:outline-none focus:border-[#D9F99D] pl-[44px] pr-[70px]"
              />
              <PoundIcon className="absolute left-3 top-1/2 -translate-y-1/2" />
              <p className="absolute right-3 top-1/2 -translate-y-1/2 text-[14px] font-normal text-[#A3A3A3]">
                {Number(formik.values.price) > 0
                  ? Number(formik.values.price).toLocaleString("en-us", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  : "00.00"}
              </p>
            </div>
          </div>
          <button
            type="submit"
            disabled={isPending}
            className={
              "flex items-center justify-center py-[11px] px-[23px] gap-[10px] rounded transition-all flex-1 sm:flex-none text-[14px] font-normal leading-[22px] " +
              (isPending ? "bg-gray-400" : "bg-[#D9F99D] hover:bg-[#9ab862]")
            }
          >
            {isPending ? ((progress || 0) * 100).toFixed(0) : "Upload item"}
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AddProductForm;
