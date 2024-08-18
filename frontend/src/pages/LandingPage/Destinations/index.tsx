import romeImg from "@assets/landing/destinations/rome.png";
import londonImg from "@assets/landing/destinations/london.png";
import europeImg from "@assets/landing/destinations/europe.png";
import Decore from "@assets/landing/destinations/Decore.svg?react";
import PlaneIcon from "@assets/landing/destinations/planeIco.svg?react";

const destinations = [
  {
    name: "Rome, Italty",
    price: "$5,42k",
    img: romeImg,
    duration: 10,
  },
  {
    name: "London, UK",
    price: "$4.2k",
    img: londonImg,
    duration: 12,
  },
  {
    name: "Full Europe",
    price: "$15k",
    img: europeImg,
    duration: 28,
  },
];

const Destinations = () => {
  return (
    <div className="max-w-[1100px] mx-auto text-center mb-[11em]">
      <p className="text-[1.8em] text-[#5E6282] pop-font font-semibold ">
        Top Selling
      </p>
      <p className="font-bold volk-font text-[5em] text-[#14183E] mb-[1.2em]">
        Top Destinations
      </p>
      <ul className="grid grid-cols-3">
        {destinations.map((destination, index) => (
          <li
            key={destination.name}
            className="bg-white max-w-[31.5em] rounded-3xl relative"
            style={{
              boxShadow:
                "0px 100px 80px 0px rgba(0, 0, 0, 2%), 0px 64.81481170654297px 46.85185241699219px 0px rgba(0, 0, 0, 2%), 0px 38.51852035522461px 25.481481552124023px 0px rgba(0, 0, 0, 1%), 0px 20px 13px 0px rgba(0, 0, 0, 1%), 0px 8.148148536682129px 6.518518447875977px 0px rgba(0, 0, 0, 1%), 0px 1.8518518209457397px 3.1481480598449707px 0px rgba(0, 0, 0, 0%)",
            }}
          >
            <img
              src={destination.img}
              alt={destination.name + " image"}
              className="h-[32.7em] w-full object-cover object-top  rounded-t-3xl"
            />
            <div className="p-[1.6em] pop-font font-medium text-[#5E6282]">
              <div className="flex items-center justify-between mb-4 text-[1.8em]">
                <p>{destination.name}</p>
                <p>{destination.price}</p>
              </div>
              <p className="flex items-center gap-4 text-[1.6em]">
                <PlaneIcon />
                {destination.duration + " Days Trip"}
              </p>
            </div>
            {index === destinations.length - 1 && (
              <Decore className="absolute h-[60%] right-[-6em] bottom-[4em] z-[-1]" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Destinations;
