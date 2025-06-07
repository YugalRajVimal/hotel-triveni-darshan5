import React from "react";

const Footer = () => {
  return (
    <div className=" relative flex flex-col text-center justify-center items-center gap-4 bg-black text-white ">
      <div className="md:px-10 px-4 pt-4 w-full">
        <h5 className="text-lg font-semibold text-center">Quick Links</h5>
        <div className="w-full flex justify-evenly items-center flex-wrap py-4">
          <a className="w-[250px]" href="/privacypolicy">
            <p>Privacy Policy</p>
          </a>
          <a className="w-[250px]" href="/refundpolicy">
            Refund Policy
          </a>
          <a className="w-[250px]" href="/termsandconditions">
            Terms And Conditions
          </a>
        </div>
      </div>
      <p className="pb-8">
        Copyright © 2015 Birla Dharmshala - Powered by gowappilyinfotech
      </p>
    </div>
  );
};

export default Footer;
