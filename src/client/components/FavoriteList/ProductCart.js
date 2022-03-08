import React from 'react';
import PropTypes from 'prop-types';
import './FavoriteList.styles.css';

function ProductCart(props) {
  const { product, favorites, setFavorites } = props;

  const removeProductFromFavorites = () => {
    setFavorites((prev) => prev.filter((item) => item.id !== product.id));
    const result = favorites.find(({ id }) => id === product.id);
    if (result !== undefined) {
      const index = favorites.indexOf(result);

      if (index > -1) {
        favorites.splice(index, 1);
        
        }
      }
    
    const userId = 10; // this is set for testing only
    // TODO : integrate with userId when user logs in

    const api = `/api/favorites?product_id= ${product.id} &user_id=${userId}`;

    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        product_id: product.id,
        user_id: userId,
      }),
    };
    fetch(api, requestOptions)
      .then((response) => response.json())
      
  };
  

  return (
    <div className="add_cart_button">
      <div>
        <button
          className="close-button"
          onClick={removeProductFromFavorites}
          type="button"
        >
          X
        </button>
      </div>
      <div className="discounted_price">
        <div
          style={{
            display: product.discount_percent !== 0 ? 'inline-block' : 'none',
            'text-decoration': 'line-through',
          }}
        >
          {product.currency} {product.price}
        </div>
        <div
          style={{
            display: product.discount_percent === 0 ? 'inline-block' : 'none',
          }}
        >
          {product.currency} {product.price}
        </div>
        <div
          style={{
            display: product.discount_percent !== 0 ? 'inline-block' : 'none',
          }}
        >
          <span className="currency">{product.currency}</span>
          {Math.round(product.price * (1 - product.discount_percent / 100))}
        </div>
      </div>
      <div>
        <button className="add_button" type="button">
          {' '}
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

ProductCart.propTypes = {
  product: PropTypes.shape({
    discount_percent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    currency: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFavorites: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductCart;
