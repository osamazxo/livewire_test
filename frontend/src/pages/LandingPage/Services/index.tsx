import WeatherIcon from "@assets/landing/services/weather.svg";
import FlightIcon from "@assets/landing/services/flight.svg";
import MicIcon from "@assets/landing/services/mic.svg";
import SettingsIcon from "@assets/landing/services/settings.svg";
import Decor from "@assets/landing/services/decor.svg?react";

import clsx from "clsx";

const services = [
  {
    name: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
    icon: WeatherIcon,
    selected: false,
  },
  {
    name: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    icon: FlightIcon,
    selected: true,
  },
  {
    name: "Local Events",
    description:
      "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    icon: MicIcon,
    selected: false,
  },
  {
    name: "Customization",
    description:
      "We deliver outsourced aviation services for military customers",
    icon: SettingsIcon,
    selected: false,
  },
];
const Services = () => {
  return (
    <div className="max-w-[1200px] mx-auto text-center mb-[11em] relative">
      <Decor className="absolute top-0 right-0" />
      <p className="text-[1.8em] text-[#5E6282] pop-font font-semibold ">
        CATEGORY
      </p>
      <p className="font-bold volk-font text-[5em] text-[#14183E] mb-[2em]">
        We Offer Best Services
      </p>
      <ul className="grid justify-center grid-cols-4 gap-[3.2em]">
        {services.map((service) => (
          <li
            key={service.name}
            className={clsx(
              "relative flex flex-col mx-auto items-center gap-2 text-center ",
              service.selected
                ? "bg-white p-4 max-w-[20em] rounded-[2.4em] sha"
                : "max-w-[19em]"
            )}
            style={{
              boxShadow: service.selected
                ? "0px 100px 80px 0px rgba(0, 0, 0, 2%), 0px 64.81481170654297px 46.85185241699219px 0px rgba(0, 0, 0, 2%), 0px 38.51852035522461px 25.481481552124023px 0px rgba(0, 0, 0, 1%), 0px 20px 13px 0px rgba(0, 0, 0, 1%), 0px 8.148148536682129px 6.518518447875977px 0px rgba(0, 0, 0, 1%), 0px 1.8518518209457397px 3.1481480598449707px 0px rgba(0, 0, 0, 0%)"
                : "none",
            }}
          >
            <img
              src={service.icon}
              alt={service.name + "icon"}
              className={clsx(
                service.selected ? "size-[12em] mt-[-7.2em]" : "size-[6em]"
              )}
            />
            <p className="text-[2em] text-[#1E1D4C] font-semibold open-font">
              {service.name}
            </p>
            <p className="pop-font font-medium text-[1.6em] text-[#5E6282] ">
              {service.description}
            </p>
            {service.selected && (
              <div className="absolute z-[-1] left-[-2.5em] bottom-[-2.5em] size-[8em] rounded-tl-[2em] rounded-br-[0.8em] bg-[#DF6951]" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
