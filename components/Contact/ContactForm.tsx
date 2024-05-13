import React from "react";
import imageSrc from "./me.jpeg"; // Make sure to import your image file

function ContactForm() {
  return (
    <div className="flex flex-col items-center h-screen bg-slate-300">
      <div className="bg-red-50 h-20 w-60 flex items-center   " >
        <img src="me" alt="Your Image" className="w-full" />
      </div>
      <div className="bg-gradient-to-r from-gray-500 to-indigo-400 p-8 rounded-lg shadow-lg transition duration-300 max-w-md w-full">
        <form action="">
          <div className="mb-4">
            <label className="block text-white mb-2">Name</label>
            <input
              type="text"
              className="w-full bg-slate-700 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-md px-4 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Your Email</label>
            <input
              type="email"
              className="w-full bg-slate-700 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-md px-4 py-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2">Phone</label>
            <input
              type="tel"
              className="w-full bg-slate-700 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-md px-4 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Message</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              className="w-full bg-slate-700 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-md px-4 py-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
