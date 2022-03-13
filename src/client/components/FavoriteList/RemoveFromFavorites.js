import React from 'react';
import PropTypes from 'prop-types';
import './FavoriteList.styles.css';

function RemoveFromFavorites(props) {
  const { product, favorites, setFavorites, user } = props;

  const removeProductFromFavorites = () => {
    setFavorites((prev) => prev.filter((item) => item.id !== product.id));
    const result = favorites.find(({ id }) => id === product.id);
    if (result !== undefined) {
      const index = favorites.indexOf(result);

      if (index > -1) {
        favorites.splice(index, 1);
      }
    }

    const api = `/api/favorites?product_id=${product.id}&uid=${user.uid}`;

    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        product_id: product.id,
        user_id: user.uid,
      }),
    };
    fetch(api, requestOptions).then((response) => response.json());
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
            textDecoration: 'line-through',
          }}
        >
          <span className="currency"> DKK {product.price}</span>
        </div>
        <div
          style={{
            display: product.discount_percent === 0 ? 'inline-block' : 'none',
          }}
        >
          <span className="currency"> DKK {product.price}</span>
        </div>
        <div
          style={{
            display: product.discount_percent !== 0 ? 'inline-block' : 'none',
          }}
        >
          <span className="currency">
            DKK
            {Math.round(product.price * (1 - product.discount_percent / 100))}
          </span>
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

RemoveFromFavorites.propTypes = {
  product: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      currency: PropTypes.string,
      discount_percent: PropTypes.number.isRequired,
    }),
  ),
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFavorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.arrayOf(PropTypes.object).isRequired,
};
RemoveFromFavorites.defaultProps = {
  product: PropTypes.shape({ currency: 'DKK' }),
};

export default RemoveFromFavorites;
