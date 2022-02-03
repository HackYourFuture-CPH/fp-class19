import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { action } from '@storybook/addon-actions';
import './FavouriteList.styles.css';
import closeButtonImage from '../../assets/images/close_button.png';

const closeButton = {
  src: closeButtonImage,
  alt: 'circle image',
};

export default function FavouriteList({ productList }) {
  const [counter, setCounter] = useState(0);
  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h2>Favourites</h2>
      <ul className="container">
        {productList.map((product) => {
          return (
            <div>
              <li>
                <div className="product_container">
                  <div>
                    <img
                      className="product_image"
                      src={product.image.src}
                      alt={product.image.alt}
                    />
                  </div>
                  <div className="name-counter-container">
                    <div className="product_name">{product.name}</div>
                    <br></br>
                    <br></br>

                    <div className="counter-section">
                      <div className="qty-text">QTY</div>
                      <div>
                        <button
                          className="counter-button"
                          onClick={handleClick1}
                        >
                          +
                        </button>
                      </div>
                      <div className="counter-box">{counter}</div>
                      <div>
                        <button
                          className="counter-button"
                          onClick={handleClick2}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="add_cart_button">
                    <div>
                      <button
                        className="close-button"
                        onClick={action('You have clicked the close button')}
                      >
                        X
                      </button>
                    </div>
                    <div>
                      {product.currency} {product.price}
                    </div>
                    <div>
                      <button
                        className="add_button"
                        onClick={action(
                          'You have clicked the add to cart button',
                        )}
                      >
                        {' '}
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <div className="line"></div>
            </div>
          );
        })}
      </ul>
    </>
  );
}

FavouriteList.propTypes = {
  image: PropTypes.objectOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  closeOrder: PropTypes.func,
  addToCart: PropTypes.func,
};

FavouriteList.defaultProps = {
  closeOrder: null,
  addToCart: null,
};
