import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.styles.css';

export default function Pagination({ currentPage, pages, maxNumberOfPages, onHandlePagination, onPrevButton, onNextButton }) {

  const displayPageNumbers = pages.map((number) => {
      if (number) {
       return (
        <button
          type="button"
          key={number}
          onClick={() => onHandlePagination(number)}
          className={currentPage === number ? 'active' : null}
        >
          {number}
        </button>
      );
    }
    return null;
  });

  // let pageIncrementBtn = null;
  // if (pages.length > 4) {
  //   pageIncrementBtn = (
  //     <button type="button" onClick={() => onNextButton()}>
  //       &hellip;
  //     </button>
  //   );
  // }
  // let pageDecrementBtn = null;
  // if (minPageNumberLimit >= 1) {
  //   pageDecrementBtn = (
  //     <button type="button" onClick={() => onPrevButton()}>
  //       &hellip;
  //     </button>
  //   );
  // }

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
        {/* {pageDecrementBtn} */}
        {displayPageNumbers}
        {/* {pageIncrementBtn} */}
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
  pages: PropTypes.arrayOf.isRequired, 
  maxNumberOfPages: PropTypes.number, 
  onHandlePagination: PropTypes.func.isRequired, 
  onPrevButton: PropTypes.func.isRequired, 
  onNextButton: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  currentPage: 1,
  maxNumberOfPages: 6,
};
