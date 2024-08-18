import bookTripImg from "@assets/landing/book_trip/book_trip.png";
import SelectionIcon from "@assets/landing/book_trip/selectionIcon.svg";
import SwimIcon from "@assets/landing/book_trip/swimIcon.svg";
import TaxiIcon from "@assets/landing/book_trip/taxiIcon.svg";

const steps = [
  {
    name: "Choose Destination",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    icon: SelectionIcon,
    color: "#F0BB1F",
  },
  {
    name: "Make Payment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    icon: SwimIcon,
    color: "#F15A2B",
  },
  {
    name: "Reach Airport on Selected Date",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    icon: TaxiIcon,
    color: "#006380",
  },
];
const BookTrip = () => {
  return (
    <div className="max-w-[1100px] mx-auto mb-[17em] relative">
      <div className="pop-font max-w-[42.2em]">
        <p className="text-[#5E6282] text-[1.8em] font-semibold mb-2">
          Easy and Fast
        </p>
        <p className="volk-font font-bold text-[#14183E] text-[4.5em] leading-[1.1em] tracking-tight mb-6">
          Book your next trip
          <br /> in 3 easy steps
        </p>
        <ul className="flex flex-col gap-6">
          {steps.map((step) => (
            <li key={step.name} className="flex gap-4">
              <div
                className={`flex items-center justify-center size-[48px] rounded-lg shrink-0`}
                style={{
                  backgroundColor: step.color,
                }}
              >
                <img src={step.icon} alt="step icon" className="size-[24px]" />
              </div>
              <div className="text-[#5E6282] text-[1.6em]">
                <p className="font-bold">{step.name}</p>
                <p className="font-normal">{step.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <img
        src={bookTripImg}
        alt="book trip"
        className="absolute right-0 top-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default BookTrip;
