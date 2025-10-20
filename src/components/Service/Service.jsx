import React from 'react'
import flight from '../../assets/flight.png'
import hotel from '../../assets/hotel.png'
import tourguide from '../../assets/tourguide.png'
import tripguide from '../../assets/tripguide.png'
import visa from '../../assets/visa.png'
import transaport from '../../assets/transaport.png'


const Service = () => {
  return (
    <div className='min-h-screen mt-25 sm:px-6 lg:px-10'>
      <div className='text-center mb-10'>
        <h1 className='text-3xl sm:text-4xl font-bold'>Services</h1>
       <p className='py-2 text-gray-600 text-sm px-5 sm:text-base'>End-to-end arrangements handled with care and precision, guided by experienced teams.</p>
      </div>
        <div className='grid grid-cols-1 md:grid-cols-3  gap-6 mx-8 my-8'>
          <div className='border rounded-lg p-5 shadow-lg hover:border-green-500 hover:transition hover:scale-105 duration-300'>
            <div className='flex items-center gap-2'>
               <p className='text-center border p-2 px-2 rounded-lg border-green-500'>
                <img className='w-6 h-6'
                 src={visa} alt="Visa Image" />
              </p>
            <h2 className='text-2xl font-semibold mb-3 '>Visa Assitance</h2>
            </div>
            <p>Document checks, application processing, and personalized guidance.</p>
          </div>
          <div className='border rounded-lg p-5 shadow-lg hover:border-green-500 hover:transition hover:scale-105 duration-300'>
            <div className='flex items-center gap-2'>
              <p className='text-center border p-2 px-2 rounded-lg border-green-500'>
                <img className='w-6 h-6'
                 src={flight} alt="Flight Image" />
              </p>
            <h2 className='text-2xl font-semibold mb-3 '>Flight Booking</h2>
            </div>
            <p>Flexible routes and group bookings with reputable airlines.</p>
          </div>
          <div className='border rounded-lg p-5 shadow-lg hover:border-green-500 hover:transition hover:scale-105 duration-300'>
            <div className='flex items-center gap-2'>
               <p className='text-center border p-2 px-2 rounded-lg border-green-500'>
                <img className='w-6 h-6'
                 src={hotel} alt="Hotel Image" />
              </p>
            <h2 className='text-2xl font-semibold mb-3 '>Hotel Booking</h2>
            </div>
            <p>Curated 3-5 stays near the Haramain for ease and comfort.</p> 
          </div>
          <div className='border rounded-lg p-5 shadow-lg hover:border-green-500  hover:transition hover:scale-105 duration-300'>
            <div className='flex items-center gap-2'>
               <p className='text-center border p-2 px-2 rounded-lg border-green-500'>
                <img className='w-6 h-6'
                 src={transaport} alt="transaport Image" />
              </p>
            <h2 className='text-2xl font-semibold mb-3 '>Transaport</h2>
            </div>
            <p>Airport transfers and inter-city travel with reliable operators.</p>
          </div>
          <div className='border rounded-lg p-5 shadow-lg hover:border-green-500 hover:transition hover:scale-105 duration-300'>
            <div className='flex items-center gap-2'>
               <p className='text-center border p-2 px-2 rounded-lg border-green-500'>
                <img className='w-6 h-6'
                 src={tourguide} alt="Tour-Guide Image" />
              </p>
            <h2 className='text-2xl font-semibold mb-3 '>Guieded Tours</h2>
            </div>
            <p>Ziyarat of significant sites in Makkah and Madinah with spiritual insights.</p>
          </div>
          <div className='border rounded-lg p-5 shadow-lg hover:border-green-500 hover:transition hover:scale-105 duration-300'>
            <div className='flex items-center gap-2'>
               <p className='text-center border p-2 px-2 rounded-lg border-green-500'>
                <img className='w-6 h-6'
                 src={tripguide} alt="Trip-Guide Image" />
              </p>
            <h2 className='text-2xl font-semibold mb-3 '>On-Trip Support</h2>
            </div>
            <p>24/7 assistance with multilingual staff and scholars.</p> 
          </div>
        </div>
    </div>
  )
}

export default Service
