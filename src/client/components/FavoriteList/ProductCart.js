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
            textDecoration: 'line-through',
          }}
        >
         <span className='currency'> DKK {product.price}</span>
        </div>
        <div
          style={{
            display: product.discount_percent === 0 ? 'inline-block' : 'none',
          }}
        >
         <span className='currency'> DKK {product.price}</span>
        </div>
        <div
          style={{
            display: product.discount_percent !== 0 ? 'inline-block' : 'none',
          }}
        >
          <span className="currency">DKK
          {Math.round(product.price * (1 - product.discount_percent / 100))}</span>
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
};
 ProductCart.defaultProps={
   product:PropTypes.shape({ currency:'DKK'})
  
   

}

export default ProductCart;
