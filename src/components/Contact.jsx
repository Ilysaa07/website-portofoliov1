import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm('service_contact', 'template_q1mzues', form.current, 'UW5UrZeCITVpxMiXw')
      .then(() => {
        toast.success('Email sent successfully!');
        form.current.reset();
      })
      .catch((error) => {
        console.error('Email error:', error.text);
        toast.error('Failed to send email. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="px-4 py-10 max-w-screen-lg mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            name="user_name"
            type="text"
            placeholder="Name"
            className="border p-2 rounded dark:text-black"
            required
          />
          <input
            name="user_email"
            type="email"
            placeholder="Email"
            className="border p-2 rounded dark:text-black"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="border p-2 rounded dark:text-black"
            rows="4"
            required
          />
          <button
            type="submit"
            className="bg-[#121212] text-white py-2 px-4 rounded hover:bg-white hover:text-black transition flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
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
              </span>
            ) : (
              'Send'
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
