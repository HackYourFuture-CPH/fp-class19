import React, { useState } from 'react';
import './ShoppingCartPage.styles.css';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart.component';

export const InitialShoppingCart = [];

export const addToShoppingCart = (
  idParam,
  imageParam,
  nameParam,
  priceParam,
  currencyParam,
  discountParam,
  quantityParam,
) => {
  
  const result = InitialShoppingCart.find(({ id }) => id === idParam);

  if (result === undefined) {
    
    const product = {
      id: idParam,
      image: imageParam,
      name: nameParam,
      price: priceParam,
      currency: currencyParam,
      quantity: quantityParam,
      discount: discountParam,
    };
   
    InitialShoppingCart.push(product);
  } else {
    
    result.quantity += quantityParam;
  }

  

  return InitialShoppingCart;
};

export default function ShoppingCartPage() {
  const [shoppingCart, setShoppingCart] = useState(InitialShoppingCart);
 
  
  return (
    <div>
      <h2 className="heading">Shopping Cart</h2>
      <div
        className="shop-cart"
        style={{
          display: shoppingCart.length > 0 ? 'inline-block' : 'none',
        }}
      >
        <ShoppingCart
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
        />
      </div>
      <div
        className="empty-shop-cart"
        style={{
          display: shoppingCart.length === 0 ? 'inline-block' : 'none',
        }}
      >
        There are no items in the shopping cart
      </div>
    </div>
  );
}
