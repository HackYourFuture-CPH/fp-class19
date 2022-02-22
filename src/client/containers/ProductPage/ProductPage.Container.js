import React from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../../hooks/useProduct';
import { useProducts } from '../../hooks/useProducts';
import './ProductPage.styles.css';
import ProductDetail from '../../components/ProductDetail/ProductDetail.component';
/* import Carousel from './CarouselDeleteMe/Carousel.component'; */
import Loader from '../../components/Loader/Loader.component';

export default function ProductPage() {
  const { productId } = useParams();

  const { product, isLoading, error } = useProduct(productId);
  const { products, isLoading1, error1 } = useProducts();

  return (
    <div className="product-page">
      {isLoading && <Loader />}
      {!isLoading && !error && <ProductDetail product={product} />}
      {error && <h1>Error occurred while fetching products: {error}</h1>}
    </div>
  );
}
