import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTwitch,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

  const sendEmail = (e) => {
    e.preventDefault();
    // Handle email subscription logic here
    alert("Subscribed!");


  }
  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-black text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h1 className="text-3xl font-extrabold text-green-500 mb-3">
            Al Haram Journey
          </h1>
          <p className="text-sm leading-relaxed text-gray-400">
            Experience a smooth and spiritual journey with Al Haram — your trusted
            partner for Hajj, Umrah, and Ziyarah travel services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Quick Links
          </h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/service" className="hover:text-blue-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-blue-400 transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
          <p className="text-sm text-gray-400 mb-4">
            Stay connected with us on social media for updates and travel offers.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/people/Mohammed-Sufiyan/pfbid0236SDhfiNBaMwjbsrdXZPssv3sFmcat8vjnBNH2pRGq11UAjK1wrnvjhx4am2MHxjl/" target="_blank"
              className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/md__sufiyan_77/" target="_blank"
              className="p-2 bg-gray-800 hover:bg-pink-600 rounded-full transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 hover:bg-sky-500 rounded-full transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 hover:bg-purple-500 rounded-full transition"
            >
              <FaTwitch size={20} />
            </a>
            <a
              href="https://github.com/mdsufiyan77" target="_blank"
              className="p-2 bg-gray-800 hover:bg-gray-600 rounded-full transition"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Subscribe Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Subscribe
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            Get the latest Umrah & Hajj package updates directly in your inbox.
          </p>
          <form onSubmit={sendEmail} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email..."
              className="min-w-46 p-2 rounded-md text-white border border-gray-500  focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
            
              type="submit"
              className="px-4 py-2 rounded-md cursor-pointer bg-green-600 text-white font-semibold hover:bg-green-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Al Haram Journey. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
