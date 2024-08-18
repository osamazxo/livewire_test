import Avatar from "@assets/landing/avatar.png";
import ChevronUp from "@assets/landing/chevron-up.svg?react";
import ChevronDown from "@assets/landing/chevron-down.svg?react";

const Testimonials = () => {
  return (
    <div className="max-w-[1100px] mx-auto mb-[10em] relative flex justify-between ">
      <div>
        <p className="text-[1.8em] text-[#5E6282] font-semibold pop-font mb-3">
          Testimonials
        </p>
        <p className="volk-font font-bold text-[5em] text-[#14183E] leading-[1.2em] mb-[1.4em]">
          What people say
          <br /> about Us.
        </p>
        <div className="flex gap-6">
          <button className="block size-[1.2em] rounded-full bg-[#39425D]" />
          <button className="block size-[1.2em] rounded-full bg-[#E5E5E5]" />
          <button className="block size-[1.2em] rounded-full bg-[#E5E5E5]" />
        </div>
      </div>
      <div className="relative flex gap-4 items-center pop-font text-[#5E6282] pb-[10em]">
        <img
          src={Avatar}
          alt="Person Image"
          className="absolute left-[-4em] top-[-2em] size-[6em] rounded-full z-10"
        />
        <div>
          <div
            className="bg-white p-[3em] pr-[5em] rounded-xl relative"
            style={{
              boxShadow:
                "0px 100px 80px 0px rgba(0, 0, 0, 2%), 0px 64.81481170654297px 46.85185241699219px 0px rgba(0, 0, 0, 2%), 0px 38.51852035522461px 25.481481552124023px 0px rgba(0, 0, 0, 1%), 0px 20px 13px 0px rgba(0, 0, 0, 1%), 0px 8.148148536682129px 6.518518447875977px 0px rgba(0, 0, 0, 1%), 0px 1.8518518209457397px 3.1481480598449707px 0px rgba(0, 0, 0, 0%)",
            }}
          >
            <p className="text-[1.6em] font-medium mb-[2em] leading-[1.6em]">
              “On the Windows talking painted pasture yet its <br /> express
              parties use. Sure last upon he same as <br /> knew next. Of
              believed or diverted no.”
            </p>
            <p className="font-semibold text-[1.8em]">Mike taylor</p>
            <p className="font-medium text-[1.4em]">Lahore, Pakistan</p>
            <div className="flex flex-col py-[2em] px-[3em] justify-end gap-1 size-full bg-transparent absolute top-[7.5em] left-[3.5em] z-[-1] border-2 border-[#F7F7F7] rounded-xl">
              <p className="font-bold text-[1.8em]">Chris Thomas</p>
              <p className="font-medium text-[1.4em]">CEO of Red Button</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[5em] pl-[6em]">
          <button className="flex">
            <ChevronUp />
          </button>
          <button className="flex">
            <ChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
