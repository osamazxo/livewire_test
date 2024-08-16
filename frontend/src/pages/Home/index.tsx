import ControllBar from "./components/ControllBar";
import Pagination from "./components/Pagination";
import Products from "./components/Products";

const Home = () => {
  return (
    <div className="py-[32px] sm:py-[85px] px-[16px] sm:px-[100px] flex flex-col gap-8 mx-auto max-w-[1600px]">
      <ControllBar />
      <Products />
      <Pagination />
    </div>
  );
};

export default Home;
