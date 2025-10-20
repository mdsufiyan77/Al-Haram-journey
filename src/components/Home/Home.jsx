import React from 'react'
import { Link } from 'react-router-dom'
import bgImage from '../../assets/bgImage.png'

function Home() {
  return (
    <>
      <div
        className="
          relative min-h-screen 
          bg-cover bg-center bg-no-repeat 
          flex flex-col justify-center items-start
          px-6 md:px-16 lg:px-24 py-20
          overflow-hidden mt-10
        "
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Overlay for contrast */}
        <div className="absolute inset-0  bg-black/50 backdrop-blur-sm"></div>

        {/* Floating decorative glow (optional for modern look) */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-green-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-4xl flex flex-col gap-8 text-white animate-fadeIn">
          
          {/* Tagline */}
          <div className="bg-white/20 backdrop-blur-md max-w-lg  p-2 px-6 rounded-full inline-block shadow-lg">
            <h5 className="text-green-300 font-semibold tracking-wide">
              Licensed & Trusted — Hajj & Umrah Services
            </h5>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Your <span className="text-green-400">Trusted Partner</span><br />
            for a Blessed Journey
          </h1>

          {/* Description */}
          <p className="text-gray-200 max-w-2xl leading-relaxed text-base md:text-lg">
            From visas and flights to hotels and guided Ziyarat, we deliver seamless, spiritually fulfilling Hajj and Umrah experiences — so you can focus on what truly matters: worship and reflection.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 font-semibold">
            <Link to="/Contact">
              <button className="bg-green-500 p-3 px-8 rounded-full shadow-md hover:bg-green-600 hover:shadow-lg transition duration-300 cursor-pointer">
                Contact Us
              </button>
            </Link>
            <Link to="/PackageTour">
              <button className="border border-green-400 text-green-300 p-3 px-8 rounded-full hover:bg-green-600 hover:text-white hover:shadow-lg transition duration-300 cursor-pointer">
                Book Now
              </button>
            </Link>
          </div>

          {/* Stats Section */}
          <div className="mt-10 flex flex-wrap gap-6 md:gap-10">
            {[
              { label: 'Years of Service', value: '05+' },
              { label: 'Pilgrims Guided', value: '10K+' },
              { label: 'On-Ground Support', value: '24/7' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-lg text-center px-6 py-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
              >
                <h1 className="text-3xl md:text-3xl font-bold text-green-400">{item.value}</h1>
                <p className="text-gray-200 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
