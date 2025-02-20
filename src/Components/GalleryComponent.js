import React from "react";

const GalleryComponent = () => {
  return (
    <div id="bookRoom" className="text-center pt-8">
      <h1 className="font-bold text-3xl sm:text-4xl  pb-2 text-red-700">
        ACCOMODATION
      </h1>
      <p className="sm:px-[200px] font-semibold text-md sm:text-lg pb-4">
        Hotel Triveni Darshan boasts clean and comfortable rooms, with a special
        mention for the well-kept AC accommodations.
      </p>
      <div className="w-full flex flex-wrap gap-4 justify-evenly">
        <div className="w-[90%] md:w-[45%] lg:w-[30%] aspect-[4/3]">
          <img
            src="/TriveniHotel/doubleBedRoom.webp"
            className="w-full h-[68%] object-cover"
          />
          <div className="h-[32%] flex flex-col justify-center items-center ">
            <p className=" flex w-full items-center justify-between justify-between py-2 text-lg font-semibold">
              Double Bed Room{" "}
              <span className="text-sm font-semibold">5550/- Per Night</span>
            </p>
            <button className="bg-red-600  p-1 text-md sm:text-lg text-white border-blue-700 border-[1px] rounded-md">
              <a
                href="http://wa.me/+918209029773"
                className="text-white h-full w-full flex justify-center items-center gapy-2"
              >
                BOOK NOW
              </a>
            </button>
          </div>
        </div>
        <div className="w-[90%] md:w-[45%] lg:w-[30%] aspect-[4/3] ">
          <img
            src="/TriveniHotel/tripleBedRoom.avif"
            className="w-full h-[68%] object-cover"
          />
          <div className="h-[32%] flex flex-col justify-center items-center ">
            <p className=" flex  w-full  items-center justify-between py-2 text-lg font-semibold">
              Triple Bed Room{" "}
              <span className="text-sm font-semibold">7550/- Per Night</span>
            </p>
            <button className="bg-red-600  p-1 text-md sm:text-lg text-white border-blue-700 border-[1px] rounded-md">
              <a
                href="http://wa.me/+918209029773"
                className="text-white h-full w-full flex justify-center items-center gap-2"
              >
                BOOK NOW
              </a>
            </button>
          </div>
        </div>
        <div className="w-[90%] md:w-[45%] lg:w-[30%] aspect-[4/3] ">
          <img
            src="/TriveniHotel/fourBedRoom.avif"
            className="w-full h-[68%] object-cover"
          />
          <div className="h-[32%] flex flex-col justify-center items-center ">
            <p className=" flex  w-full  items-center justify-between py-2 text-lg font-semibold">
              Four Bed Room{" "}
              <span className="text-sm font-semibold">10050/- Per Night</span>
            </p>
            <button className="bg-red-600  p-1 text-md sm:text-lg text-white border-blue-700 border-[1px] rounded-md">
              <a
                href="http://wa.me/+918209029773"
                className="text-white h-full w-full flex justify-center items-center gap-2"
              >
                BOOK NOW
              </a>
            </button>
          </div>
        </div>
        <div className="w-[90%] md:w-[45%] lg:w-[30%] aspect-[4/3] ">
          <img
            src="/TriveniHotel/fiveBedRoom.webp"
            className="w-full h-[68%] object-cover"
          />
          <div className="h-[32%] flex flex-col justify-center items-center ">
            <p className=" flex  w-full  items-center justify-between py-2 text-lg font-semibold">
              Five Bed Room{" "}
              <span className="text-sm font-semibold">11850/- Per Night</span>
            </p>
            <button className="bg-red-600  p-1 text-md sm:text-lg text-white border-blue-700 border-[1px] rounded-md">
              <a
                href="http://wa.me/+918209029773"
                className="text-white h-full w-full flex justify-center items-center gap-2"
              >
                BOOK NOW
              </a>
            </button>
          </div>
        </div>
        <div className="w-[90%] md:w-[45%] lg:w-[30%] aspect-[4/3] ">
          <img
            src="/TriveniHotel/sixBedRoom.webp"
            className="w-full h-[68%] object-cover"
          />
          <div className="h-[32%] flex flex-col justify-center items-center ">
            <p className=" flex  w-full  items-center justify-between py-2 text-lg font-semibold">
              Six Bed Room{" "}
              <span className="text-sm font-semibold">13550/- Per Night</span>
            </p>
            <button className="bg-red-600  p-1 text-md sm:text-lg text-white border-blue-700 border-[1px] rounded-md">
              <a
                href="http://wa.me/+918209029773"
                className="text-white h-full w-full flex justify-center items-center gap-2"
              >
                BOOK NOW
              </a>
            </button>
          </div>
        </div>
        <div className="w-[90%] md:w-[45%] lg:w-[30%] aspect-[4/3] ">
          <img
            src="/TriveniHotel/FamilyRoom.avif"
            className="w-full h-[68%] object-cover"
          />
          <div className="h-[32%] flex flex-col justify-center items-center ">
            <p className=" flex  w-full  items-center justify-between py-2 text-lg font-semibold">
              Family Bed Room{" "}
              <span className="text-sm font-semibold">11050/- Per Night</span>
            </p>
            <button className="bg-red-600  p-1 text-md sm:text-lg text-white border-blue-700 border-[1px] rounded-md">
              <a
                href="http://wa.me/+918209029773"
                className="text-white h-full w-full flex justify-center items-center gap-2"
              >
                BOOK NOW
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryComponent;
