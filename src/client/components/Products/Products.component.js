import React, { useState } from 'react';
import './Products.styles.css';
import Product from '../Product/Product.component';
import Sort from '../Sort/Sort.component';

export default function Products({ products }) {
  const [sortedProducts, setSortedProducts] = useState(products);

  const addFavorites = () => {
    console.log('added to favorites');
  };
  const addToCart = () => {
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
                image={product.picture}
                name={product.name}
                price={product.price}
                onClick={addToCart}
                addToFavorites={addFavorites}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
