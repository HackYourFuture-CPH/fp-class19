import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.styles.css';

export default function Pagination({
  currentPageIndex,
  pageCount,
  setCurrentPageIndex,
}) {
  const pages = [];
  for (let i = 1; i <= pageCount; i += 1) {
    pages.push(i);
  }
  const displayPageNumbers = pages.map((number) => {
    if (number) {
      return (
        <button
          type="button"
          key={number}
          onClick={() => setCurrentPageIndex(number - 1)}
          className={number ? 'active' : null}
        >
          {number}
        </button>
      );
    }
    return null;
  });

  return (
    <div className="pagination">
      <button
        type="button"
        onClick={() => setCurrentPageIndex(currentPageIndex - 1)}
        disabled={currentPageIndex === 0}
        className="arrows"
      >
        &#9664;
      </button>
      {displayPageNumbers}
      <button
        type="button"
        onClick={() => setCurrentPageIndex(currentPageIndex + 1)}
        disabled={currentPageIndex === pages.length - 1}
        className="arrows"
      >
        &#9654;
      </button>
    </div>
  );
}

Pagination.propTypes = {
  currentPageIndex: PropTypes.number,
  pageCount: PropTypes.number.isRequired,
  setCurrentPageIndex: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  currentPageIndex: 0,
};
