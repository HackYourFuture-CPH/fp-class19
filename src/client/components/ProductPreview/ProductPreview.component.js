// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import Button from '../Button/Button.component';
// import './ProductPreview.css';

// export default function ProductPreview({
//   image,
//   name,
//   price,
//   size,
//   currency,
//   onClick,
// }) {
//   const [count, setCount] = useState(0);

//   function decreamentCount() {
//     setCount((prevCount) => prevCount - 1);
//   }

//   function increamentCount() {
//     setCount((prevCount) => prevCount + 1);
//   }
//   return (
//     <div>
//       <div className="product-detail-container">
//         <div className="product-preview-content">
//           <img src={image} alt={name} />
//           <div className="product-preview-details">
//             <h3 className="product-name">{name}</h3>
//             <div className="gray-container">
//               <span>
//                 {' '}
//                 <p>{size}</p>
//               </span>

//               <span>
//                 <p>{price}</p>
//               </span>
//               <p>Quantity</p>
//               <button onClick={decreamentCount}>-</button>
//               <span>{count}</span>
//               <button onClick={increamentCount}>+</button>
//               <Button primary="true" label="ADD"></Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// ProductPreview.propTypes = {
//   image: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   size: PropTypes.string.isRequired,
//   currency: PropTypes.string,
//   onClick: PropTypes.func,
// };
// ProductPreview.defaultProps = {
//   onClick: null,
//   currency: 'DKK',
// };

import React from 'react';
import PropTypes from 'prop-types';
import './ProductDetail.styles.css';
import Button from '../Button/Button.component';

export default function ProductDetail({
  product,
  quantityCount,
  setQuantityCount,
}) {
  function decreamentQuantityCount() {
    setQuantityCount((prevCount) => prevCount - 1);
  }

  function increamentQuantityCount() {
    setQuantityCount((prevCount) => prevCount + 1);
  }

  function handleQuantityCountChange(e) {
    e.preventDefault();
    setQuantityCount(e.target.value);
  }

  const { name, price, picture } = product;
  return (
    <div className="productDetail">
      <article className="productDetail-container">
        <section className="image-container">
          <img src={picture} alt={name} />
        </section>
        <section className="info-container">
          <h3>{name}</h3>
          <div className="info-container-stripes">
            <div className="info-container-stripe">
              <p>2lt pot </p>
              <p>DKK &nbsp;{price}</p>
            </div>
            <div className="info-container-stripe">
              <p>Quantity: &nbsp;</p>
              <button
                type="button"
                className="quantityButton"
                onClick={decreamentQuantityCount}
              >
                -
              </button>
              <input
                type="text"
                value={quantityCount}
                onChange={handleQuantityCountChange}
              />
              <button
                type="button"
                className="quantityButton"
                onClick={increamentQuantityCount}
              >
                +
              </button>
            </div>
          </div>
          <Button
            className="productDetail-button"
            type="button"
            onClick={' '}
            primary={true}
            label="ADD"
          />
        </section>
      </article>
    </div>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    picture: PropTypes.string,
  }).isRequired,
  quantityCount: PropTypes.number.isRequired,
  setQuantityCount: PropTypes.func.isRequired,
};
