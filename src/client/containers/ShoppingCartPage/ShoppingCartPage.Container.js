import React from 'react';
import './ShoppingCartPage.styles.css';

export const shoppingCart = [];

// assuming name is unique in product. Later we should change product component to also include 
// product id and then we should use that instead of name
export const addToShoppingCart = function(nameParam, priceParam, currencyParam, quantityParam) {
  console.log('in add to shopping cart');
  
  const result = shoppingCart.find( ({ name }) => name === nameParam );
  console.log(result);

  if (result === undefined) {
    console.log('product does not exist in cart');
    const product = {name:nameParam, price:priceParam, currency:currencyParam, quantity:quantityParam};
    console.log(product);
    shoppingCart.push(product);
  } else {
    console.log('product already exist in cart');
    result.quantity = result.quantity + quantityParam;
  }

  console.log(shoppingCart);
  
};

export default function ShoppingCartPage() {
  return <div>Shopping Cart Page</div>;
}
