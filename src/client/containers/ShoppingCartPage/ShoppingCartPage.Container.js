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
    console.log('product does not exist in cart');
    const product = {
      id: idParam,
      image: imageParam,
      name: nameParam,
      price: priceParam,
      currency: currencyParam,
      quantity: quantityParam,
      discount: discountParam,
    };
    console.log(product);
    InitialShoppingCart.push(product);
  } else {
    console.log('product already exist in cart');
    result.quantity += quantityParam;
  }

  console.log(InitialShoppingCart);

  return InitialShoppingCart;
};

export const incrementFromShoppingCart = function (product, shoppingCart) {
  console.log('in increment cart');
  const result = shoppingCart.find(({ id }) => id === product.id);
  result.quantity += 1;
  console.log(shoppingCart);
};
export const decrementFromShoppingCart = function (product, shoppingCart) {
  console.log('in decrement cart');
  const result = shoppingCart.find(({ id }) => id === product.id);
  result.quantity -=  1;
  console.log(shoppingCart);
};

export const removeFromShoppingCart = function (
  product,
  shoppingCart,
  setShoppingCart,
) {
  console.log('in remove cart');
  setShoppingCart((prev) => prev.filter((item) => item.id !== product.id));
  const result = shoppingCart.find(({ id }) => id === product.id);
  if (result === undefined) {
    console.log('product does not exist in cart');
  } else {
    console.log('remove product from the cart');
    const index = shoppingCart.indexOf(result);
    if (index > -1) {
      shoppingCart.splice(index, 1); // 2nd parameter means remove one item only
      console.log(shoppingCart);
    }
  }
};

export default function ShoppingCartPage() {
  const [shoppingCart, setShoppingCart] = useState(InitialShoppingCart);
  return (
    <div>
      <h2 className="heading">Shopping Cart</h2>
      <div className="shop-cart">
        <ShoppingCart
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
        />
      </div>
    </div>
  );
}
