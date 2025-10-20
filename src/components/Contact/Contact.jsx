import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser"; // ✅ import added
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import email from "../../assets/email.png";
import call from "../../assets/call.png";
import whatsapp from "../../assets/whatsapp.png";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true); // Set loading state to true

    emailjs
      .sendForm(
        "service_mfn0hz8",      // ✅ your service ID
        "template_r9b6qei",     // ✅ your correct template ID
        form.current,
        "A6HEXNHRVZqkr8WJ_"     // ✅ your public key
      )
      .then(
        (result) => {
          // console.log(result.text);
          toast.success("✅ Message sent successfully!", {
            position: "top-center",
            autoClose: 2000,
          });
          form.current.reset();
          setLoading(false); // Reset loading state
        },
        (error) => {
          // console.log(error.text);
          toast.error("❌ Failed to send message. Try again later.", {
            position: "top-center",
            autoClose: 3000,
          });
          setLoading(false); // Reset loading state
        }
      );
  };

  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-20 py-12 mt-20">
      {/* Header */}
      <div className="text-center md:text-left mb-10">
        <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
        <h5 className="text-gray-600">
          We're ready to answer questions and tailor a package for you.
        </h5>
      </div>

      {/* Contact Info + Form */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Section — Contact Info */}
        <div className="space-y-6 w-full md:w-1/2">
          <div className="flex items-center gap-3">
            <div className="border p-2 rounded-lg">
              <img
                className="w-5 h-5 cursor-pointer"
                src={call}
                alt="Call Icon"
              />
            </div>
            <div>
              <h2 className="font-semibold">Call</h2>
              <p className="text-gray-600">+91 9579767496</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="border p-2 rounded-lg">
              <img
                className="w-5 h-5 cursor-pointer"
                src={email}
                alt="Email Icon"
              />
            </div>
            <div>
              <h2 className="font-semibold">Email</h2>
              <p className="text-gray-600">info@harramjurnry.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="border p-2 rounded-lg">
              <img
                className="w-5 h-5 cursor-pointer"
                src={whatsapp}
                alt="WhatsApp Icon"
              />
            </div>
            <div>
              <h2 className="font-semibold">WhatsApp</h2>
              <p className="text-gray-600">Chat with us</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-orange-800 bg-amber-100 p-4 rounded-lg">
              Hajj Packages are seasonal & limited. Early registration is
              recommended to secure your spot.
            </p>
          </div>
        </div>

        {/* Right Section — Contact Form */}
        <div className="w-full md:w-1/2">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4">
            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div className="relative w-full">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="peer w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none 
                  focus:border-green-500 focus:ring-1 focus:ring-green-500 placeholder-transparent focus:placeholder-gray-400"
                />
                <label
                  htmlFor="name"
                  className="absolute left-3 top-3 text-gray-500 text-sm transition-all duration-200 
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                  peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-green-500
                  peer-[&:not(:placeholder-shown)]:top-[-8px] peer-[&:not(:placeholder-shown)]:text-xs
                  peer-[&:not(:placeholder-shown)]:text-green-500 bg-white px-1"
                >
                  Name
                </label>
              </div>

              {/* Email */}
              <div className="relative w-full">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="example@email.com"
                  className="peer w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none 
                  focus:border-green-500 focus:ring-1 focus:ring-green-500 placeholder-transparent focus:placeholder-gray-400"
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 top-3 text-gray-500 text-sm transition-all duration-200 
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                  peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-green-500
                  peer-[&:not(:placeholder-shown)]:top-[-8px] peer-[&:not(:placeholder-shown)]:text-xs
                  peer-[&:not(:placeholder-shown)]:text-green-500 bg-white px-1"
                >
                  Email Address
                </label>
              </div>

              {/* Phone */}
              <div className="relative w-full">
                <input
                  type="text"
                  id="phone"
                  name="phone"

                  placeholder="9999999999"
                  className="peer w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none 
                  focus:border-green-500 focus:ring-1 focus:ring-green-500 placeholder-transparent focus:placeholder-gray-400"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-3 top-3  text-sm transition-all duration-200 
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 z-10
                  peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-green-500
                  peer-[&:not(:placeholder-shown)]:top-[-8px] peer-[&:not(:placeholder-shown)]:text-xs
                  peer-[&:not(:placeholder-shown)]:text-green-500 bg-white  px-1"
                >
                  Phone
                </label>
              </div>

              {/* Package Select */}
              <div className="relative w-full ">

                <select
                  id="Umrah-Packages"
                  name="Umrah-Packages"
                  required
                  className="block  peer w-full h-full  text-sm appearance-none px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg 
                  focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 "
                >
                  <option value="" disabled selected hidden className="" >
                    Choose Package
                  </option>
                  <option value="umrah-standard">Umrah Standard</option>
                  <option value="umrah-premium">Umrah Premium</option>
                  <option value="hajj-economy">Hajj Economy</option>
                  <option value="hajj-deluxe">Hajj Deluxe</option>
                </select>
                <label
                  htmlFor="Umrah-Packages"
                  className="absolute left-3 top-3 text-gray-500 text-sm transition-all duration-200
                  peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-green-600
                  peer-valid:top-[-8px] peer-valid:text-xs peer-valid:text-green-600
                  bg-white px-1"
                >

                  Select Your Package

                </label>
                {/* Dropdown arrow */}
                <svg
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>

              </div>


            </div>

            {/* Message */}
            <div className="relative w-full">
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="Write your message here..."
                className="peer w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none 
                focus:border-green-500 focus:ring-1 focus:ring-green-500 placeholder-transparent focus:placeholder-gray-400"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-3 top-3 text-gray-500 text-sm transition-all duration-200 
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-green-500
                peer-[&:not(:placeholder-shown)]:top-[-8px] peer-[&:not(:placeholder-shown)]:text-xs
                peer-[&:not(:placeholder-shown)]:text-green-500 bg-white px-1"
              >
                Message
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full md:w-auto px-6 py-2 rounded-lg text-white transition 
    ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`}
            >
              {loading ? (
                <div className="flex items-center gap-2">
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
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Submitng...
                </div>
              ) : (
                "Submit"
              )}
            </button>

          </form>
        </div>
      </div>
      <ToastContainer />
    </div>

  );
};

export default Contact;
