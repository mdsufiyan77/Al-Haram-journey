import React from 'react';
import { NavLink } from 'react-router-dom';
import umrahStandard from '../../assets/umrahstandard.jpg';
import umrahPremium from '../../assets/umrahpremium.jpg';
import hajjEconomy from '../../assets/hajjeconomy.jpg';
import hajjDeluxe from '../../assets/hajjdeluxe.jpg';

const PackageTour = () => {
  const handleWhatsAppClick = (packageDetails) => {
    const phoneNumber = "9579767496";
    const message = `Hello, I am interested in the ${packageDetails.title} package. Here are the details:
- ${packageDetails.duration}
- ${packageDetails.description}
- ${packageDetails.features.join('\n- ')}

Price: ${packageDetails.price}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  const packages = [
    {
      title: "Umrah Standard",
      tag: "Value",
      duration: "7 Day • Makkah & Madinah",
      price: "₹75,000",
      description: "A budget-friendly option for pilgrims seeking essential services and accommodations.",
      features: [
        "Economy flights",
        "3-star hotel accommodations",
        "Group transportation",
        "Basic guided tours",
      ],
      image: umrahStandard,
    },
    {
      title: "Umrah Premium",
      tag: "Comfort",
      duration: "10 Day • Close to the Haramain",
      price: "₹85,000",
      description: "A balanced package offering a mix of comfort and affordability for a fulfilling pilgrimage experience.",
      features: [
        "Economy or premium economy flights",
        "4-star hotel accommodations",
        "Private transportation",
        "Comprehensive guided tours",
      ],
      image: umrahPremium,
      highlight: "Most Popular",
    },
    {
      title: "Hajj Economy",
      tag: "Seasonal",
      duration: "Full Manasik Support",
      price: "₹300,000",
      description: "A luxurious package designed for pilgrims seeking top-tier services and accommodations for a memorable journey.",
      features: [
        "Business class flights",
        "5-star hotel accommodations",
        "Private luxury transportation",
        "Exclusive guided tours and experiences",
      ],
      image: hajjEconomy,
    },
    {
      title: "Hajj Deluxe",
      tag: "Limited",
      duration: "Premium Services with Close Access",
      price: "₹350,000",
      description: "An elite Hajj experience combining luxury, convenience, and personalized services for distinguished pilgrims.",
      features: [
        "Business class air travel",
        "5-star luxury hotel stay",
        "Private transfers",
        "Tailored guided rituals & experiences",
      ],
      image: hajjDeluxe,
    },
  ];

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-10 mt-25">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold">Packages</h1>
        <p className="py-2 text-gray-600 text-sm sm:text-base">
          Carefully curated Hajj and Umrah Packages designed for comfort and devotion
        </p>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="relative border-2 border-green-500 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-white flex flex-col"
          >
            {pkg.highlight && (
              <div className="absolute -top-3 left-3 bg-amber-100 text-amber-600 text-xs font-semibold px-3 py-1 rounded-full border   border-amber-400 shadow-sm">
                {pkg.highlight}
              </div>
            )}

            {/* Image */}
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-44 sm:h-48 md:h-40 lg:h-40 object-cover rounded-t-xl"
            />

            {/* Content */}
            <div className="flex flex-col justify-between p-4 flex-grow">
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="text-lg sm:text-xl font-semibold">{pkg.title}</h2>
                  <p className="bg-green-200 text-green-800 text-xs sm:text-sm px-2 py-1 rounded-full">
                    {pkg.tag}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-500 mt-1">{pkg.duration}</p>
                <p className="text-green-700 font-bold text-lg sm:text-xl mt-2">{pkg.price}</p>
                <p className="text-sm mt-2 text-gray-700">{pkg.description}</p>

                <ul className="list-disc list-inside mt-2 text-sm text-gray-700 space-y-1">
                  {pkg.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleWhatsAppClick(pkg)}
                className="mt-4 w-full cursor-pointer bg-green-700 text-white py-2 rounded-md font-medium hover:bg-green-800 transition duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Button */}
      <div className="text-center mb-20">
        <NavLink to="/contact">
          <button className="bg-green-600 cursor-pointer text-white px-6 py-3 rounded-full hover:scale-105 hover:bg-green-700 transition duration-300">
            Contact Us for More Info
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default PackageTour;
