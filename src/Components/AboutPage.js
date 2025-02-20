import React from "react";

const AboutPage = () => {
  return (
    <div id="about" className="py-10 px-10 md:px-28 lg:px-32 ">
      <div className="text-center py-4 text-center ">
        <h4 className="font-bold text-3xl sm:text-4xl  pb-2 text-red-700">
          ABOUT US
        </h4>
        <p className="font-semibold text-md sm:text-lg">
          Hotel Triveni Darshan is a very good place to stay as it is very neat
          and clean and very close to Triveni Sangam Prayagraj, Hanuman Mandir,
          Alopi Devi Mandir , Railway Station Bade Hanuman Jee Temple, Akshaya
          Vat
        </p>
      </div>
      <div className="  flex flex-col lg:flex-row items-center gap-4">
        {/* Images */}
        <div className="w-full lg:w-1/2 h-[60vh] lg:h-[80vh]">
          <div className="h-1/2">
            <img
              src="TriveniHotel/home1.webp"
              className="h-full w-full object-cover pb-2"
            />
          </div>
          <div className="h-1/2">
            <img
              src="TriveniHotel/Home2.webp"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2  flex flex-col gap-3 text-lg justify-center pl-4">
          <h1 className="text-3xl font-bold">
            About Hotel Triveni Darshan Prayagraj
          </h1>
          <span className="text-red-600 font-semibold">||जय श्री राम||</span>
          <p>
            Hotel Triveni Darshan is a popular budget hotel in Prayagraj
            (formerly known as Allahabad), located near key places of interest,
            including the Triveni Sangam, which is the confluence of the Ganga,
            Yamuna, and Sarasvati rivers. This hotel is well-known for offering
            comfortable stays with basic amenities for both tourists and
            pilgrims visiting the city.
          </p>
          <p>The property typically provides a range of services such as:</p>
          <ul className="pl-4 flex flex-col gap-2">
            <li>
              <strong>Accommodation:</strong>Budget rooms with simple
              furnishings.
            </li>
            <li>
              <strong>Location:</strong>Close to prominent religious sites and
              transportation hubs.
            </li>
            <li>
              <strong>Facilities:</strong> May include room service, air
              conditioning, Wi-Fi, and other essential amenities depending on
              the room type.
            </li>
          </ul>
          <p>
            Since Prayagraj is an important religious and cultural destination,
            many visitors choose accommodations like Hotel Triveni Darshan for
            its proximity to the holy sites. It’s always a good idea to check
            recent reviews or contact the hotel directly to ensure their
            services and offerings meet your current expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
