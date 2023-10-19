/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";

const FaqSection = () => {
  const [faqs, setFaqs] = useState([]);
  const apiUrl = "https://pc-service-backends.vercel.app/api/v1/faq";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setFaqs(data.data));
  }, []);

  return (
    <div>
      <h1 className="text-center fw-bold underline text-lg lg:text-4xl p-10">
        Frequently Asked Questions
      </h1>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        {faqs?.map((faq: any) => (
          <div
            key={faq?.id}
            className="collapse collapse-arrow join-item border border-base-300 p-5"
          >
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              {faq?.question}
            </div>
            <div className="collapse-content">
              <p>{faq?.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <br />

      <div className="flex justify-center flex-col md:flex-row mx-auto  p-2 w-full">
        <button className="flex mx-auto mt-4 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Add FAQ
        </button>
        <button className="flex mx-auto mt-4 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
          Update FAQ
        </button>
        <button className="flex mx-auto mt-4 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
          Delete FAQ
        </button>
      </div>
      <br />
    </div>
  );
};

export default FaqSection;
