import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Products.styles.css';
import Product from '../Product/Product.component';
import Sort from '../SortComponent/Sorting.component';

export default function Products({ products }) {
  const [sortedProducts, setSortedProducts] = useState(products);

  const addFavorites = () => {
    // eslint-disable-next-line no-console
    console.log('added to favorites');
  };
  const addToCart = () => {
    // eslint-disable-next-line no-console
    console.log('added to cart');
  };

  return (
    <div className="products-component">
      <Sort products={products} setSortedProducts={setSortedProducts} />

      <div>
        <ul className="product-list">
          {sortedProducts.map((product) => (
            <li key={product.id} className="product-item">
              <Product
                id={product.id}
                image={product.picture}
                name={product.name}
                price={product.price}
                currency={product.currency}
                addToFavorites={addFavorites}
                discount={product.discount_percent}
                onClick={addToCart}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Products.propTypes = {
  products: PropTypes.shape({
    id: PropTypes.number,
    picture: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    image: PropTypes.string,
    discount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    currency: PropTypes.string,
  }),
};

Products.defaultProps = {
  products: null,
};
