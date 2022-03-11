import React from 'react';
import PropTypes from 'prop-types';
import './Sorting.styles.css';

export default function SortComponent({ products, setSortedProducts }) {
  const [option, setOption] = React.useState();
  function sortProducts(opt) {
    if (opt === 'AlphabeticallyAZ') {
      return products.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (opt === 'AlphabeticallyZA') {
      return products.sort((a, b) => b.name.localeCompare(a.name));
    }
    if (opt === 'PriceDescending') {
      return products.sort((a, b) => a.price - b.price);
    }
    if (opt === 'PriceAscending') {
      return products.sort((a, b) => b.price - a.price);
    }
  }
  React.useEffect(() => {
    if (!option) {
      setSortedProducts(products);
    } else {
      console.log('sorting with', option);
      setSortedProducts([...sortProducts(option)]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [option, setSortedProducts]);

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
    </div>
  );
}

SortComponent.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
    }),
  ).isRequired,
};
