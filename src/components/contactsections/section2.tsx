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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3390.400674989369!2d77.13398467469062!3d20.112563618616235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd0e3a62192cac5%3A0xe06a819c28f134dc!2sHotel%20Maniprabha!5e1!3m2!1sen!2sin!4v1744457116778!5m2!1sen!2sin"
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
