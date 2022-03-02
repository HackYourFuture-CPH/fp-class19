import React from 'react';
import Product from '../SpecialOffers/OfferProductModel.component';
import './OfferProductsList.styles.css';
import {addProductToFavorites} from '../../containers/FavoritePage/FavoritePage.Container';

export default function OfferProducts({ products, addToCart, addToFavorites }) {


  const addToFavorites=()=>{
    console.log('in add to favorites');
    addProductToFavorites(2,id);
    }
  return (
    <div className="offer-products-container">
      <ul className="offer-products-list">
        {products.map((product) => (
          <li key={product.id} className="offer-product">
            <Product
              id={product.id}
              image={product.picture}
              name={product.name}
              price={product.price}
              discount={product.discount_percent}
              onClick={addToCart}
              addToFavorites={addToFavorites}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}