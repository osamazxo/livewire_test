import logo1 from "@assets/landing/logos/logo1.png";
import logo2 from "@assets/landing/logos/logo2.png";
import logo3 from "@assets/landing/logos/logo3.png";
import logo4 from "@assets/landing/logos/logo4.png";
import logo5 from "@assets/landing/logos/logo5.png";
import clsx from "clsx";
const logos = [logo1, logo2, logo3, logo4, logo5];
const Logos = () => {
  return (
    <div className="flex items-center justify-between max-w-[1100px] mx-auto mb-[11em]">
      {logos.map((logo, index) => (
        <div key={index} className="relative">
          <img
            src={logo}
            alt="logo name"
            className={clsx(
              index !== 2 ? 'grayscale-[1] before:contents-["]' : ""
            )}
          />
          <div
            className="absolute rounded-lg w-[130%] h-[8.6em] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              display: index === 2 ? "block absolute" : "none",
              boxShadow:
                index === 2
                  ? "0px 100px 80px 0px rgba(0, 0, 0, 2%), 0px 64.81481170654297px 46.85185241699219px 0px rgba(0, 0, 0, 2%), 0px 38.51852035522461px 25.481481552124023px 0px rgba(0, 0, 0, 1%), 0px 20px 13px 0px rgba(0, 0, 0, 1%), 0px 8.148148536682129px 6.518518447875977px 0px rgba(0, 0, 0, 1%), 0px 1.8518518209457397px 3.1481480598449707px 0px rgba(0, 0, 0, 0%)"
                  : "none",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Logos;
