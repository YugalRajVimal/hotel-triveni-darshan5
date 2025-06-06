import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        At Hotel Triveni Darshan, we are committed to protecting your privacy.
        This Privacy Policy explains how your personal information is collected,
        used, and disclosed by us.
      </p>
      <h2 className="text-xl font-semibold mt-4 mb-2">
        Information Collection
      </h2>
      <p className="mb-4">
        We collect information such as your name, contact details, and
        preferences when you book a room or contact us.
      </p>
      <h2 className="text-xl font-semibold mt-4 mb-2">Usage of Information</h2>
      <p className="mb-4">
        The information collected is used to confirm your booking, send
        notifications, and improve our services.
      </p>
      <h2 className="text-xl font-semibold mt-4 mb-2">
        Sharing of Information
      </h2>
      <p className="mb-4">
        We do not share your information with third parties unless required by
        law or for essential service processing.
      </p>
      <p className="mt-6">
        For any concerns, please contact us at:{" "}
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

export default PrivacyPolicy;
