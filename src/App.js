import React from "react";
import Nav from "./Components/Nav";
import HomeImageComponent from "./Components/HomeImageComponent";
import GalleryComponent from "./Components/GalleryComponent";
import BirlaDharamshala from "./Components/BirlaDharamshala";
import Footer from "./Components/Footer";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import UpperNav from "./Components/UpperNav";
import AboutPage from "./Components/AboutPage";
import HotelFacilityPage from "./Components/HotelFacilityPage";

const App = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <UpperNav />
      <Nav />
      <HomeImageComponent />
      <AboutPage />

      <GalleryComponent />
      <HotelFacilityPage />
      <BirlaDharamshala />
      <Footer />
      <div className="fixed flex  items-center  justify-between p-4 w-full bottom-[10px] sm:bottom-0 left-0 ">
        <a href="tel:+918209029773" className="">
          <FaPhoneAlt className="text-5xl text-white bg-black p-2   rounded-full" />
        </a>
        <a href="http://wa.me/+918209029773">
          <IoLogoWhatsapp className="text-5xl text-[#08c241] " />
        </a>
      </div>
    </div>
  );
};

export default App;
