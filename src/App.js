import React, { useState } from "react";
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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import RefundPolicy from "./Components/RefundPolicy";
import TermsConditions from "./Components/TermsAndConditions";

const App = () => {

  const [phoneNo, setPhoneNo] = useState('+918209029773');
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <div className="relative w-full overflow-hidden">
              <UpperNav />
              <Nav />
              <HomeImageComponent  phoneNo={phoneNo}/>
              <AboutPage />

              <GalleryComponent  phoneNo={phoneNo}/>
              <HotelFacilityPage />
              <BirlaDharamshala phoneNo={phoneNo} />
              <Footer />
              <div className="fixed flex  items-center  justify-between p-4 w-full bottom-[10px] sm:bottom-0 left-0 ">
                <a href={`tel:${phoneNo}`} className="">
                  <FaPhoneAlt className="text-5xl text-white bg-black p-2   rounded-full" />
                </a>
                <a href={`http://wa.me/${phoneNo}`}>
                  <IoLogoWhatsapp className="text-5xl text-[#08c241] " />
                </a>
              </div>
            </div>
          }
        />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/refundpolicy" element={<RefundPolicy />} />
        <Route path="/termsandconditions" element={<TermsConditions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
