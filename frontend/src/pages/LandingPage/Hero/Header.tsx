import Logo from "@assets/landing/Logo.svg?react";
import { Link } from "react-router-dom";
const navLinks = [
  {
    name: "Desitnations",
    path: "desitnations",
  },
  {
    name: "Hotels",
    path: "hotels",
  },
  {
    name: "Flights",
    path: "flights",
  },
  {
    name: "Bookings",
    path: "bookings",
  },
  {
    name: "Login",
    path: "login",
  },
];
const Header = () => {
  return (
    <header className="flex justify-between items-center pr-[1.6em]">
      <Logo className="h-[4em] shrink-0" />
      <nav className="flex gap-9 items-center .open-font text-[1.7em] text-[#212832] font-medium">
        <ul className="flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <button className="flex items-center justify-center border border-[#212832] rounded px-[1.2em] py-[0.4em]">
          Sign up
        </button>
        <button className="flex gap-1 items-center">
          En
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.499939 0.5L4.99994 5L9.49994 0.5" stroke="#212832" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
