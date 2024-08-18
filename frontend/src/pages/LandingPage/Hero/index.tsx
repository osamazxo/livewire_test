import Header from "./Header";
import SideDecor from "@assets/landing/hero-side-decore.png";
import TextDecor from "@assets/landing/hero-text-decor.svg?react";
import heroImg from "@assets/landing/hero.png";
const Hero = () => {
  return (
    <div className="pl-[14em] pt-[4em] pr-[12em] relative overflow-hidden mb-[6em]">
      <Header />
      <img
        src={SideDecor}
        alt="decor"
        className="absolute top-[-1em] z-[-1] right-[-1em] w-[40%]"
      />
      <div className="py-[1.6em] flex justify-between items-center">
        <div>
          <p className="pop-font text-[2em] text-[#DF6951] font-bold mb-[1em] ">
            Best Destinations around the world
          </p>
          <p className="volk-font font-bold text-[#181E4B] text-[6em] leading-[1.05em] tracking-[-0.03em]">
            Travel,{" "}
            <span className="relative">
              enjoy
              <TextDecor className="absolute left-[-0.35em] bottom-[0.18em] w-[5em] z-[-1]" />
            </span>
            <br /> and live a new
            <br /> and full life
          </p>
          <p className="pop-font font-medium text-[1.6em] text-[#5E6282] mt-[1.6em]">
            Built Wicket longer admire do barton vanity itself do in it.
            <br />
            Preferred to sportsmen it engrossed listening. Park gate
            <br /> sell they west hard for the.
          </p>
          <div className="mt-[3em] flex gap-12">
            <button className="open-font font-medium text-[1.8em] text-[white] rounded-lg bg-[#F1A501] px-[1.2em] py-[0.8em]">
              Find out more
            </button>
            <button
              aria-label="play button"
              className="flex items-center gap-4 pop-font "
            >
              <div className="flex items-center justify-center size-[4em] rounded-full bg-[#DF6951]">
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6.5L0.749999 12.9952L0.75 0.00480889L12 6.5Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="text-[#686D77] text-[1.7em] font-medium pop-font">
                Play Demo
              </p>
            </button>
          </div>
        </div>
        <img src={heroImg} alt="hero image" className="w-[50%]" />
      </div>
    </div>
  );
};

export default Hero;
