import { useState } from "react";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (e: any) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://pc-service-backends.vercel.app/api/v1/feedback/create-feedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ comment: feedback }),
        },
      );

      if (response.ok) {
        alert("Feedback submitted successfully");
        setFeedback("");
      } else {
        alert("Failed to submit feedback");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 justify-center items-center">
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="message">
                    Feedback
                  </label>
                  <textarea
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows={8}
                    value={feedback}
                    onChange={handleFeedbackChange}
                  />
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto mx-auto justify-center items-center"
                  >
                    Send Feedback
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
