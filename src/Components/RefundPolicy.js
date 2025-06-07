import React from "react";

const RefundPolicy = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Refund Policy</h1>
      <p className="mb-4">
        At Birla Dharmshala, we understand that plans can change. Below is our
        refund policy:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          Full refund if cancellation is made 7 days before the check-in date.
        </li>
        <li>
          50% refund if cancellation is made between 3-6 days before check-in.
        </li>
        <li>No refund for cancellations made within 48 hours of check-in.</li>
        <li>No refund for no-shows or early checkouts.</li>
      </ul>
      <p className="mb-4">
        Refunds will be processed within 7–10 business days to the original mode
        of payment.
      </p>
      <p className="mt-6">
        For any refund-related queries, email us at:{" "}
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

export default RefundPolicy;
