import MailIcon from "@assets/landing/subscripe/mailIcon.svg?react";
import SendIcon from "@assets/landing/subscripe/sendIcon.svg?react";
import CirclesUp from "@assets/landing/subscripe/circles-up.svg?react";
import CirclesDown from "@assets/landing/subscripe/circles-down.svg?react";
import Decor from "@assets/landing/subscripe/decor.svg?react";

const Subscripe = () => {
  return (
    <div className="relative max-w-[1200px] mx-auto mb-[17.5em] px-[9em]">
      <div className="relative bg-[#f8f7fd] rounded-xl rounded-tl-[12.9em] py-[6em] px-[5em]">
        <div
          className="flex items-center justify-center size-fit p-3 rounded-full absolute top-[-1.4em] right-[-1.4em]"
          style={{
            background: "linear-gradient(190deg, #747DEF, #5E3BE1)",
          }}
        >
          <SendIcon className="size-[3.4em]" />
        </div>
        <p className="pop-font font-semibold text-[3em] text-[#5E6282] text-center mb-[2em] relative z-[2]">
          Subscribe to get information, latest news and other
          <br /> interesting offers about Jadoo
        </p>
        <form className="open-font flex gap-6 justify-center relative z-[2]">
          <div className="relative flex-1 max-w-[42em]">
            <MailIcon className="absolute top-1/2 -translate-y-1/2 left-4 " />
            <input
              type="email"
              placeholder="Your email"
              className="rounded-lg h-[4.8em] p-[1.6em] pl-[3.4em] text-[#39425D] text-[1.4em] font-normal w-full focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg text-[white] font-semibold text-[1.7em] px-[3.5em] flex items-center justify-center"
            style={{
              background: "linear-gradient(190deg, #FF946D, #FF7D68)",
            }}
          >
            Subscribe
          </button>
        </form>
        <CirclesUp className="opacity-10 absolute right-0 top-0 h-[18.5em] z-1" />
        <CirclesDown className="opacity-10 absolute left-[-1em] bottom-0 h-[24.4em] z-1" />
      </div>
      <Decor className="absolute right-0 bottom-[-7em] w-[14em]" />
    </div>
  );
};

export default Subscripe;
