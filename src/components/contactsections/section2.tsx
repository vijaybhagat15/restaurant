// src/components/section2.tsx

import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Section2: React.FC = () => {
  return (
    <section className="grid md:grid-cols-2 gap-6 px-3 md:px-10 py-5 max-w-screen-2xl mx-auto border-gray-300 border-b-2">
      <div className="h-80">
        <iframe
          src="http://lookerstudio.google.com/u/0/reporting/7a88f630-41d1-430c-b32b-43352f8a8faf/page/p_3fospsp2rd"
          width="100%"
          height="100%"
          loading="lazy"
          className="rounded-md"
        ></iframe>
      </div>

      <div className="bg-primary p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-primary mb-4">
          Maison Flavour Global Headquarters
        </h3>
        <p>
          Hingoli Rd,
          <br />
          Washim,
          <br />
          Maharashtra 444505
          <br />
          India.
        </p>

        <div className="mt-4 text-sm">
          <p>
            <strong>Phone / Fax</strong>
          </p>
          <p>
            +91 111 222 3334
            <br />
            +91 333 444 5555
          </p>
          <p className="mt-2">help: +91 555 666 2222</p>

          <div className="mt-4">
            <div className="mt-2 flex space-x-4">
              <FaFacebook className="w-6 h-6 cursor-pointer hover:scale-110 text-blue-500 transition-transform" />
              <FaInstagram className="w-6 h-6 cursor-pointer hover:scale-110 text-pink-500 transition-transform" />
              <FaLinkedin className="w-6 h-6 cursor-pointer hover:scale-110 text-blue-600 transition-transform" />
              <FaTwitter className="w-6 h-6 cursor-pointer hover:scale-110 text-blue-400 transition-transform" />
              <FaYoutube className="w-6 h-6 cursor-pointer hover:scale-110 text-red-500 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
