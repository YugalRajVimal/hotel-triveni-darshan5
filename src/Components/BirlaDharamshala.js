import { IoCall } from "react-icons/io5";
export default function BirlaDharamshala() {
  return (
    <div
      id="reachUs"
      className=" bg-white text-gray-800 py-8 px-10 md:px-28 lg:px-32"
    >
      <div className="text-center py-4 text-center">
        <h4 className="font-bold text-3xl sm:text-4xl  text-red-700">
          How to Reach Us
        </h4>
      </div>

      {/* <h3 className="text-2xl font-semibold mb-4">Key Amenities Offered</h3>
      <ul className="list-disc  space-y-2 text-lg pl-6">
        <li>
          <strong>Comfortable Rooms:</strong> Guests can choose between AC and
          non-AC rooms, ensuring a suitable option for all.
        </li>
        <li>
          <strong>Dining Facilities:</strong> The Dharamshala features an
          on-site restaurant serving vegetarian meals, which aligns with the
          dietary preferences of many visitors.
        </li>
        <li>
          <strong>Parking:</strong> Secure parking spaces are available for
          those traveling by car.
        </li>
        <li>
          <strong>24/7 Assistance:</strong> Staff are present round the clock to
          cater to guest needs, ensuring a safe and convenient stay.
        </li>
      </ul> */}
      <div className="flex sm:flex-row flex-col w-full">
        <div className="mt-8 w-full sm:w-1/2 h-full">
          {/* <h4 className="text-xl font-medium mb-2">Location:</h4> */}

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3603.260171112101!2d81.854159!3d25.429564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3985354e8d33b001%3A0xc77d4d077e7165e!2sHotel%20Triveni%20Darshan!5e0!3m2!1sen!2sin!4v1738757211938!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full h-[200px] sm:h-[400px]"
          ></iframe>
        </div>
        <div className="mt-8 w-full sm:w-1/2 h-full sm:pl-8 p-4 text-xl flex flex-col justify-center gap-4">
          <h5>
            <strong>Address :-</strong>32A, Yamuna Bank Rd, Kydganj, Prayagraj,
            Uttar Pradesh 211003
          </h5>
          <h5>
            <strong>Mobile No. :- </strong>+918209029773
          </h5>
          <h5>
            <strong>Email Id :-</strong>rakeshagrawal0333@gmail.com
          </h5>
          <div className=" flex justify-evenly gap-4">
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
    </div>
  );
}
