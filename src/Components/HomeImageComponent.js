import React from "react";
import { IoCall } from "react-icons/io5";

const HomeImageComponent = () => {
  return (
    <div id="home" className=" w-full h-[70vh] relative">
      <img
        src="/TriveniHotel/home1.webp"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 h-full w-full bg-[#00000050]"></div>
      <div className="absolute text-center flex flex-col  items-center w-full bottom-0 left-0 p-4 sm:p-10 text-3xl sm:text-4xl font-semibold flex flex-col gap-4 justify-center ">
        {/* <p className="text-orange-500">WELCOME TO</p> */}
        <h1 className="bg-yellow-500 w-fit p-2 text-center font-semibold">
          Hotel Triveni Darshan
        </h1>
        <h1 className="font-bold text-white text-4xl">
          {" "}
          Welcome to Mahakumbh 2025
        </h1>
        {/* <p className="text-sm sm:text-lg text-white">
          Birla Dharmshala Ayodhya Room’s Contact Us Today and Book Your Stay at
          Birla Dharmshala Ayodhya!
        </p> */}
        <div className="w-full flex justify-evenly">
          <button className="bg-red-600  p-2 text-sm sm:text-xl text-white border-blue-700 border-[1px] rounded-md">
            <a
              href="tel:+918209029773"
              className="text-white h-full w-full flex justify-center items-center gap-2"
            >
              <IoCall /> BOOK NOW
            </a>
          </button>
          <button className="bg-green-600  p-2 text-sm sm:text-xl text-white border-blue-700 border-[1px] rounded-md">
            <a
              href="http://wa.me/+918209029773"
              className="text-white h-full w-full flex justify-center items-center gap-2"
            >
              <IoCall /> ROOM BOOKING
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeImageComponent;
