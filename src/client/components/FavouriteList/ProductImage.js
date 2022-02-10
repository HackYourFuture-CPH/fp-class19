import React from 'react';
import './FavouriteList.styles.css';

const ProductImage = ({ product }) => {
  return (
    <div className="image-discount-box">
      <div>
        <img
          className="product_image"
          src={product.image.src}
          alt={product.image.alt}
        />
      </div>
      <div
        style={{
          display: product.discount !== 0 ? 'inline-block' : 'none',
        }}
        className="discount"
      >
        {product.discount}%
      </div>
    </div>
  );
};
export default ProductImage;
