import React, { useEffect, useState } from 'react';
import './SpecialOfferPage.styles.css';
import OfferProducts from '../../components/OfferProductsList/OfferProductsList.component';

export default function SpecialOfferPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/api/products/on_discount')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      <OfferProducts products={data} />
      );
    </div>
  );
}
