import React from "react";

const TermsConditions = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
      <p className="mb-4">
        Welcome to Hotel Triveni Darshan. By booking and staying with us, you
        agree to abide by the following terms and conditions:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Guests must provide valid ID proof at check-in.</li>
        <li>Check-in and check-out times are based on room booking details.</li>
        <li>No illegal activity is allowed on the premises.</li>
        <li>Smoking is not permitted in non-smoking areas.</li>
        <li>Any damage to hotel property will be charged accordingly.</li>
      </ul>
      <p className="mb-4">
        These terms are subject to change without prior notice. Please read them
        carefully before booking.
      </p>
      <p className="mt-6">
        Contact us at:{" "}
        <a
          href="mailto:rajeevsingh92580@gmail.com"
          className="text-blue-600 underline"
        >
          rajeevsingh92580@gmail.com
        </a>
      </p>
    </div>
  );
};

export default TermsConditions;
