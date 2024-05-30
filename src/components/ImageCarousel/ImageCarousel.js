import React, { useState } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        <button className="carousel-button left" onClick={goToPrevious}>
          ❮
        </button>
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="carousel-image" />
        <div className="carousel-button-container">
          {images[currentIndex].button}
        </div>
        <button className="carousel-button right" onClick={goToNext}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
