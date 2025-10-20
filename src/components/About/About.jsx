import React from 'react';
import photo from '../../assets/photo.png';
import image2 from '../../assets/image2.png';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen px-6 sm:px-8 md:px-12 lg:px-20 py-10 mt-16 flex flex-col gap-8">

      {/* Top section: Heading and Image side-by-side */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold py-4 text-gray-800">About Us</h1>
          <p className="max-w-xl text-gray-600 leading-relaxed">
            Al Haram Journeys is a trusted Hajj and Umrah agency dedicated to delivering safe, organized, and spiritually enriching pilgrimages. Our experienced team coordinates every detail — from visas and flights to hotels, transport, and guided ziyarat — ensuring comfort and clarity throughout your journey.
          </p>

          <ul className="text-base md:text-lg max-w-2xl mt-6 flex flex-col gap-3 pl-6 list-disc text-gray-700">
            <li>Licensed and compliant with official guidelines.</li>
            <li>Dedicated scholars and guides for spiritual support.</li>
            <li>24/7 assistance from booking to return.</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="bg-green-100 p-4 rounded-xl shadow-md">
            <img
              className="w-full max-w-md h-auto object-cover rounded-lg"
              src={image2}
              alt="About"
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mt-6">
        <NavLink to="/PackageTour">
          <div className="bg-green-600 hover:bg-green-700 transition px-8 py-3 rounded-md text-white font-semibold text-center">
            Explore Packages
          </div>
        </NavLink>
        <NavLink to="/Contact">
          <div className="border border-green-600 hover:bg-green-50 transition px-8 py-3 rounded-md text-green-600 font-semibold text-center">
            Speak to an Advisor
          </div>
        </NavLink>
      </div>

      {/* Mission Section */}
      <div className="mt-10 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-gray-800">Our Mission</h2>
        <p className="max-w-2xl mx-auto lg:mx-0 text-gray-600 leading-relaxed">
          To provide seamless, spiritually focused Hajj and Umrah experiences, allowing pilgrims to concentrate on worship while we handle the logistics with care and expertise.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="mt-10 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-gray-800">Why Choose Us?</h2>
        <ul className="list-disc list-inside max-w-2xl mx-auto lg:mx-0 text-gray-600 leading-relaxed space-y-2">
          <li>Experienced team with deep knowledge of Hajj and Umrah rituals.</li>
          <li>Comprehensive packages covering all aspects of the pilgrimage.</li>
          <li>Personalized support tailored to individual needs.</li>
          <li>Strong relationships with local service providers for quality assurance.</li>
          <li>Commitment to ethical practices and customer satisfaction.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
  