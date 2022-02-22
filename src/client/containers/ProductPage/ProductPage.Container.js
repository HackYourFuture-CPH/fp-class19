import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../../hooks/useProduct';
import { useProducts } from '../../hooks/useProducts';
import './ProductPage.styles.css';
import ProductDetail from '../../components/ProductDetail/ProductDetail.component';
/* import Carousel from './CarouselDeleteMe/Carousel.component'; */
import Loader from '../../components/Loader/Loader.component';

export default function ProductPage() {
  const { productId } = useParams();
  const { products, isLoading, error } = useProducts();
  const [currentProduct, setCurrentProduct] = useState();
  const [quantityCount, setQuantityCount] = useState(1);

  useEffect(() => {
    setCurrentProduct(products?.[productId]);
  }, [products, productId]);

  return (
    <div className="product-page">
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <ProductDetail
          product={currentProduct}
          quantityCount={quantityCount}
          setQuantityCount={setQuantityCount}
        />
      )}
      {error && <h1>Error occurred while fetching products: {error}</h1>}
    </div>
  );
}
