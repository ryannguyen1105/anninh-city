import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; 
const sliderImages = [
    '/images/1.png', 
    '/images/2.png', 
    '/images/3.png', 
    '/images/4.png', 
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1) 
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1) 
    );
  };
  
  useEffect(() => {
    const timer = setInterval(goToNext, 5000); 
    return () => clearInterval(timer); 
  }, []); 

  return (
    <div className="slider-container">
      <img 
        src={sliderImages[currentIndex]} 
        alt={`Slider image ${currentIndex + 1}`} 
        className="slider-image"
      />
      <button onClick={goToPrevious} className="slider-button prev-button">
        &#10094; 
      </button>
      
      {/* Nút Next */}
      <button onClick={goToNext} className="slider-button next-button">
        &#10095; 
      </button>
      <div className="slider-dots">
        {sliderImages.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;