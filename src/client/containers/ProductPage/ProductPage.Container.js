import React from 'react';
import './ProductPage.styles.css';
import ProductDetail from "../../components/ProductDetail/ProductDetail.component"
/* import Carousel from "../../components/Carousel.component"; */
import Loader from '../../components/Loader/Loader.component';
import { useProduct } from '../../hooks/useProduct';

export default function ProductPage() {
  const { product, isLoading, error } = useProduct(1);

  return (
    <div className="product-page">
      {isLoading && <Loader />}
      {!isLoading && !error && <ProductDetail product={product[0]} />}
      {error && <h1>Error occurred while fetching products: {error}</h1>}
    </div>
  );
}
