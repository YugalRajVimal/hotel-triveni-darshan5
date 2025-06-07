import React from "react";
import { RiParkingBoxFill } from "react-icons/ri";
import { FaFireExtinguisher } from "react-icons/fa";
import { IoIosWifi } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { IoMdCamera } from "react-icons/io";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaPersonMilitaryRifle } from "react-icons/fa6";
import { MdFoodBank } from "react-icons/md";
import { GoClockFill } from "react-icons/go";

const HotelFacilityPage = () => {
  return (
    <div id="hotelFacility" className="pt-10 px-5 md:px-28 lg:px-32">
      <div className="text-center py-4 text-center p-4">
        <h4 className="font-bold text-3xl sm:text-4xl  pb-2 text-red-700">
          HOTEL FACILITY
        </h4>
        <p className="font-semibold text-md sm:text-lg ">
          Birla Dharmshala is strategically located in the heart ofPrayagraj, as
          a budget hotel in Prayagraj providing easy access to the sacred sites
          and temples that make this city a revered destination.
        </p>
      </div>
      <div className=" flex sm:flex-row flex-col gap-4">
        {/* Images */}
        <div className="w-full sm:w-1/2 h-[30vh] sm:h-[40vh]">
          <div className="h-full">
            <img
              src="TriveniHotel/home1.webp"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className=" w-full sm:items-start items-center sm:w-1/2  flex flex-col justify-center gap-2 text-lg">
          <ul className="flex flex-col gap-1 pl-4 text-xl md:text-2xl">
            <li className="flex  gap-2 w-fit   items-center hover:text-red-600">
              <RiParkingBoxFill className="text-green-600 hover:text-red-600" />{" "}
              Free Parking
            </li>
            <li className="flex  gap-2 w-fit   items-center hover:text-red-600">
              <FaFireExtinguisher className="text-green-600 hover:text-red-600" />{" "}
              Fire Extinguiser
            </li>
            <li className="flex  gap-2 w-fit   items-center hover:text-red-600">
              <IoIosWifi className="text-green-600 hover:text-red-600" /> Free
              WiFi
            </li>
            <li className="flex  gap-2 w-fit   items-center hover:text-red-600">
              <IoCall className="text-green-600 hover:text-red-600" /> Doctor On
              Call
            </li>
            <li className="flex  gap-2 w-fit   items-center hover:text-red-600">
              <IoMdCamera className="text-green-600 hover:text-red-600" /> CCTV
            </li>
            <li className="flex  gap-2 w-fit   items-center hover:text-red-600">
              <FaArrowAltCircleRight className="text-green-600 hover:text-red-600" />{" "}
              Lift Facility
            </li>
            <li className="flex  gap-2 w-fit   items-center hover:text-red-600">
              <FaPersonMilitaryRifle className="text-green-600 hover:text-red-600" />{" "}
              24/7 Security
            </li>
            <li className="flex  gap-2 w-fit   items-center hover:text-red-600">
              <MdFoodBank className="text-green-600 hover:text-red-600" />{" "}
              Restaurant
            </li>
            <li className="flex  gap-2 w-fit   items-center hover:text-red-600">
              <GoClockFill className="text-green-600 hover:text-red-600" /> 24/7
              Check-in Check-out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HotelFacilityPage;
