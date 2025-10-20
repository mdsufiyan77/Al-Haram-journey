import React from 'react'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.png'
import image6 from '../../assets/image6.png'
import image7 from '../../assets/image7.png'
import image8 from '../../assets/image8.png'
import image9 from '../../assets/image9.png'

const Gallery = () => {
  return (
    <div className='min-h-screen mt-25 sm:px-6 lg:px-10' > 
      <div className='text-center mb-10'>
        <h1 className='text-3xl sm:text-4xl font-bold'>Gallery</h1>
        <h5>Scenes from the Haramain and sacred landmarks.</h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
        <div className="p-4">
          <img src={image1} alt="Gallery Image 1" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="p-4">
          <img src={image2} alt="Gallery Image 2" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="p-4">
          <img src={image3} alt="Gallery Image 3" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="p-4">
          <img src={image4} alt="Gallery Image 4" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="p-4">
          <img src={image5} alt="Gallery Image 5" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="p-4">
          <img src={image6}alt="Gallery Image 6" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="p-4">
          <img src={image7} alt="Gallery Image 7" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="p-4">
          <img src={image8} alt="Gallery Image 8" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="p-4">
          <img src={image9} alt="Gallery Image 9" className="w-full h-auto rounded-lg shadow-md" />
        </div>


      </div>
    </div>
  )
}

export default Gallery
