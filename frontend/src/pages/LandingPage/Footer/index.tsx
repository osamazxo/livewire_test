import { Link } from "react-router-dom";
import FacebookIcon from "@assets/landing/footer/facebook.svg?react";
import TwitterIcon from "@assets/landing/footer/twitter.svg?react";
import GooglePlayIcon from "@assets/landing/footer/google-play.svg?react";
import PlayStoreIcon from "@assets/landing/footer/play-store.svg?react";
import decor from "@assets/landing/footer/footer-decor.png";
import instagramIcon from "@assets/landing/footer/instagram.png";

const linkGroups = [
  {
    name: "Company",
    links: [
      {
        name: "About",
        path: "",
      },
      {
        name: "Careers",
        path: "",
      },
      {
        name: "Mobile",
        path: "",
      },
    ],
  },
  {
    name: "Contact",
    links: [
      {
        name: "Help/FAQ",
        path: "",
      },
      {
        name: "Press",
        path: "",
      },
      {
        name: "Affilates",
        path: "",
      },
    ],
  },
  {
    name: "More",
    links: [
      {
        name: "Airlinefees",
        path: "",
      },
      {
        name: "Airline",
        path: "",
      },
      {
        name: "Low fare tips",
        path: "",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="pop-font relative">
      <div className="flex justify-between max-w-[1100px] mx-auto">
        <div>
          <p className="font-medium text-[4.4em] text-[#181E4B] mb-[0.7em] leading-[0.6em]">
            Jadoo.
          </p>
          <p className="font-medium text-[1.3em] text-[#5E6282]">
            Book your trip in minute, get full
            <br />
            Control for much longer.
          </p>
        </div>
        {linkGroups.map((linkGroup) => (
          <ul key={linkGroup.name}>
            <li className="font-bold text-[2.1em] text-[#080809] mb-[1em]">
              {linkGroup.name}
            </li>
            {linkGroup.links.map((link) => (
              <li key={link.name} className="mb-[0.4em]">
                <Link
                  to={link.path}
                  className="font-medium text-[1.8em] text-[#5E6282]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        ))}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <a href="">
              <FacebookIcon className="size-[5.6em]" />
            </a>
            <a href="">
              <img
                src={instagramIcon}
                alt="instgram"
                className="size-[5.6em]"
              />
            </a>
            <a href="">
              <TwitterIcon className="size-[5.6em]" />
            </a>
          </div>
          <p className="font-medium text-[2em] text-[#5E6282] mb-3">
            Discover our app
          </p>
          <div className="flex gap-2">
            <a href="">
              <GooglePlayIcon />
            </a>
            <a href="">
              <PlayStoreIcon />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center font-medium text-[1.4em] text-[#5E6282] py-[4.8em] px-[1.6em]">
        All rights reserved@jadoo.co
      </p>
      <img src={decor} alt="decor" className="absolute bottom-0 right-0" />
    </footer>
  );
};

export default Footer;
