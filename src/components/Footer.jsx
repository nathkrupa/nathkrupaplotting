import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import GoogleMaps from "./GoogleMaps";
import { Link } from "react-router-dom";
import { PiWhatsappLogo } from "react-icons/pi";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="py-8 flex justify-center gap-20 items-center flex-wrap">
      <div>
        <div className="flex ">
          <img
            src="https://res.cloudinary.com/dvdrkucjh/image/upload/ujhd6oa8n0sgtbqlaggz"
            alt="logo"
            className="w-14 mx-5 object-cover"
          />
          <h1 className="text-xl md:text-2xl font-semibold my-8">
            Nathkrupa Developers Plotting
          </h1>
        </div>
        <div className="px-4 py-3 bg-white my-8 flex border justify-between border-gray-300 rounded-md shadow-sm">
          <input
            type="text"
            placeholder="Message..."
            className=" py-2 outline-none border-none "
          />
          <button className="px-6 py-2 bg-purple-600 text-white  rounded-md">
            Submit{" "}
          </button>
        </div>
        <div className="flex justify-between mx-3 max-md::max-w-80">
          <div className="flex flex-col gap-6 font-semibold">
            <h1 className="flex">
              <span>
                <MapPin className="text-purple-600 mr-4" />
              </span>
              City Vista, Kharadi, Pune-14
            </h1>
            <h1 className="flex">
              <span>
                <Phone className="text-purple-600 mr-4" />
              </span>
              +91-9822692040
            </h1>
            <h1 className="flex">
              <span>
                <PiWhatsappLogo className="text-purple-600 mr-4 text-2xl" />
              </span>
              <a
                className="hover:underline"
                href="https://wa.me/+918623926920"
                target="_blank"
              >
                +91 8623926920
              </a>
            </h1>

            <p className="hidden text-gray-500 md:block">
              @ Made my Nathkrupa developers | Scipedia
            </p>
          </div>

          <div className="flex gap-4">
            <Facebook className="text-purple-600  cursor-pointer " />
            <Instagram className="text-purple-600 cursor-pointer " />
            <Twitter className="text-purple-600   cursor-pointer  " />
          </div>
        </div>
      </div>
      <div className="px-4 hidden md:flex flex-col">
        <h1 className="text-2xl font-semibold pb-10">Pages</h1>
        <ul className="flex flex-col gap-4 text-lg font-semibold">
          <li className="hover:text-purple-700 ">
            <Link onClick={() => scrollToSection("home")}>Home</Link>{" "}
          </li>
          <li className="hover:text-purple-700">
            <Link onClick={() => scrollToSection("about")}>About</Link>
          </li>
          <li className="hover:text-purple-700">
            <Link onClick={() => scrollToSection("vision")}>Vision</Link>
          </li>
          <li className="hover:text-purple-700">
            <Link onClick={() => scrollToSection("inauguration")}>
              Inauguration
            </Link>
          </li>
        </ul>
      </div>
      <div className="h-60 w-80">
        <h1 className="text-2xl font-semibold ">Office Location</h1>
        <GoogleMaps />
      </div>
      <p className=" pb-4 hidden text-gray-500 max-md:block">
        @ Made my Nathkrupa developers | Scipedia
      </p>
    </div>
  );
};

export default Footer;
