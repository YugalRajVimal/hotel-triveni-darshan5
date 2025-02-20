import React from "react";
import { MdEmail } from "react-icons/md";

const UpperNav = () => {
  return (
    <div className=" bg-[#f9f9f9] px-6 py-2 flex items-center gap-4 ">
      <MdEmail className="text-[#3c3d3e] p-2 text-4xl bg-[#edf2fe] rounded-full" />
      <div className="flex-col">
        <h5 className=" my-auto whitespace-nowrap">Email</h5>
        <a class="contact-link" href="mailto:rajeevsingh92580@gmail.com">
          rajeevsingh92580@gmail.com
        </a>
      </div>
    </div>
  );
};

export default UpperNav;
