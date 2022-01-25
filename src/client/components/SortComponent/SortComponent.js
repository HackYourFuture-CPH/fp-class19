import React from 'react';
import PropTypes from 'prop-types';
import './SortComponent.styles.css';

export default function SortComponent({ arrayToSort }) {
  const [products, setProducts] = React.useState(arrayToSort);
  const [option, setOption] = React.useState();
  function sortProducts(opt) {
    if (opt === 'AlphabeticallyAZ') {
      setProducts(arrayToSort.sort((a, b) => b.name.localeCompare(a.name)));
    }
    if (opt === 'AlphabeticallyZA') {
      setProducts(arrayToSort.sort((a, b) => a.name.localeCompare(b.name)));
    }
    if (opt === 'PriceDescending') {
      setProducts(arrayToSort.sort((a, b) => a.price - b.price));
    }
    if (opt === 'PriceAscending') {
      setProducts(arrayToSort.sort((a, b) => b.price - a.price));
    }
  }
  React.useEffect(() => {
    sortProducts(option);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [option]);

  return (
    <div className="sorting-div">
      <select
        defaultValue="DEFAULT"
        onChange={(e) => setOption(e.target.value)}
        className="sort-options"
      >
        <option value="DEFAULT" disabled hidden>
          SORT BY
        </option>
        <option value="AlphabeticallyAZ">A-Z</option>
        <option value="AlphabeticallyZA">Z-A</option>
        <option value="PriceDescending">Price ↓</option>
        <option value="PriceAscending">Price ↑</option>
      </select>
      <div>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <h1>{product.name}</h1>
              <h3>{product.price}</h3>
            </li>
          );
        })}
      </div>
    </div>
  );
}

SortComponent.propTypes = {
  arrayToSort: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
    }),
  ).isRequired,
};
