import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const errs = {};
    if (!data.user_name.trim()) errs.user_name = "Name is required.";
    if (!data.user_email.trim()) {
      errs.user_email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(data.user_email)) {
      errs.user_email = "Email format is invalid.";
    }
    if (!data.message.trim()) errs.message = "Message is required.";
    return errs;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const data = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
    };

    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    emailjs
      .sendForm(
        "service_contact",
        "template_q1mzues",
        form.current,
        "UW5UrZeCITVpxMiXw"
      )
      .then(() => {
        toast.success("Email sent successfully!");
        setSuccess(true);
        form.current.reset();
      })
      .catch((error) => {
        console.error("Email error:", error.text);
        toast.error("Failed to send email. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => setSuccess(false), 4000); // Auto-hide success icon
      });
  };

  return (
    <section className="px-4 py-12 max-w-3xl mx-auto">
      <div className="bg-white dark:bg-neutral-900 shadow-xl rounded-3xl p-8 md:p-10 transition-all duration-300 animate-fadeIn">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Let's Get in Touch
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-6 relative"
        >
          {/* Success Icon Overlay */}
          {success && (
            <div className="absolute -top-10 right-4 animate-bounce text-green-500 text-2xl">
              <FaCheckCircle />
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              name="user_name"
              type="text"
              placeholder="Your name"
              className={`w-full px-4 py-2 rounded-xl border ${
                errors.user_name
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-700"
              } focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:text-white dark:bg-neutral-800`}
              required
            />
            {errors.user_name && (
              <p className="text-sm text-red-500 mt-1">{errors.user_name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              name="user_email"
              type="email"
              placeholder="you@example.com"
              className={`w-full px-4 py-2 rounded-xl border ${
                errors.user_email
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-700"
              } focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:text-white dark:bg-neutral-800`}
              required
            />
            {errors.user_email && (
              <p className="text-sm text-red-500 mt-1">{errors.user_email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              rows="5"
              className={`w-full px-4 py-2 rounded-xl border ${
                errors.message
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-700"
              } focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:text-white dark:bg-neutral-800`}
              required
            />
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 
    bg-gradient-to-r from-red-600 to-gray-900 
    dark:from-red-500 dark:to-black
    text-white py-3 rounded-xl font-semibold 
    hover:from-red-700 hover:to-black 
    dark:hover:from-red-600 dark:hover:to-neutral-800
    transition-all duration-300 
    flex justify-center items-center gap-2 
    disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
