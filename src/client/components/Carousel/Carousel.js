import React, { useState, useEffect } from 'react';
import Product from '../Product/Product.component';
import './CarouselStyle.css';

export default function Carousel ({ products, show }){
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(products.length);
  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    setLength(products.length);
  }, [products]);

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }
    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;
    if (diff > 3) {
      next();
    }
    if (diff < -3) {
      prev();
    }
    setTouchPosition(null);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {currentIndex > 0 && (
          <button type="button" className="left-arrow" onClick={prev}>
            &lt;
          </button>
        )}
        <div
          className="carousel-content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
          >
            {Product.map(({ id, picture, name, price }) => (
              <Product
                key={id}
                image={picture}
                name={name}
                price={price}
                onClick={() => console.log('does nothing!!')}
                addToFavorites={() => console.log('does not do much ')}
              />
            ))}
          </div>
        </div>
        {currentIndex < length - show && (
          <button type="button" className="right-arrow" onClick={next}>
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};