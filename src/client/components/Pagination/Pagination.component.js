import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.styles.css';

export default function Pagination({
  currentPage,
  pages,
  maxNumberOfPages,
  onHandlePagination,
  onPrevButton,
  onNextButton,
}) {
  const displayPageNumbers = pages.map((number) => {
    if (number) {
      return (
        <button
          type="button"
          key={number}
          onClick={() => onHandlePagination(number)}
          className={
            (number >= currentPage - 2 && number <= currentPage + 1)
              ? 'active'
              : 'hidden'
          }
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
        onClick={() => onPrevButton()}
        disabled={currentPage === 1}
        className="arrows"
      >
        &#9664;
      </button>
      {displayPageNumbers}
      <button
        type="button"
        onClick={() => onNextButton()}
        disabled={currentPage === maxNumberOfPages}
        className="arrows"
      >
        &#9654;
      </button>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  pages: PropTypes.arrayOf(PropTypes.number).isRequired,
  maxNumberOfPages: PropTypes.number,
  onHandlePagination: PropTypes.func.isRequired,
  onPrevButton: PropTypes.func.isRequired,
  onNextButton: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  currentPage: 1,
  maxNumberOfPages: 6,
};
