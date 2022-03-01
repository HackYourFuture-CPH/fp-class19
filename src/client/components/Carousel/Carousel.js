import React, { useState } from 'react';
import Product from '../Product/Product.component';
import './CarouselStyle.css';


export default function Carousel({ products, show }) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => {
    if (currentIndex < products.length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {currentIndex > 0 && (
          <button type="button" className="left-arrow" onClick={prev}> </button>
        )}
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
          >
            {products.map(({ id, picture, name, price }) => (
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
        {currentIndex < products.length - show && (
          <button type="button" className="right-arrow" onClick={next}> </button>
        )}
      </div>
  );
}