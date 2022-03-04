import React, { useEffect, useState } from 'react';
import './SpecialOfferPage.styles.css';
import OfferProducts from '../../components/OfferProductsList/OfferProductsList.component';
import Pagination from '../../components/Pagination/Pagination.component';


export default function SpecialOfferPage() {
  const [data, setData] = useState([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  useEffect(() => {
    fetch('/api/products/on_discount')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  const totalItemsPerPage = 8;
  const totalPages = Math.ceil(data.length / totalItemsPerPage);

  const getCurrentProducts = (currentPage) => {
    const lastIndex = currentPage * totalItemsPerPage;
    const firstIndex = lastIndex - totalItemsPerPage;
    const currentProducts = data.slice(firstIndex, lastIndex);
    return currentProducts;
  };

  return (
    <div className="container">
      <h1>SPECIAL OFFERS</h1>
      <div>
        <OfferProducts products={getCurrentProducts(currentPageIndex + 1)} />
        <Pagination
          currentPageIndex={currentPageIndex}
          pageCount={totalPages}
          setCurrentPageIndex={setCurrentPageIndex}
        />
      </div>
    </div>
  );
}
