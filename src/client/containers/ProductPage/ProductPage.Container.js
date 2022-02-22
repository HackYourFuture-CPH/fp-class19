import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import { useProductById } from '../../hooks/useProductById';
import './ProductPage.styles.css';
import ProductDetail from '../../components/ProductDetail/ProductDetail.component';
import Loader from '../../components/Loader/Loader.component';
/* import Modal from "./ModalDeleteMe/Modal.component"; */
/* import Carousel from './CarouselDeleteMe/Carousel.component'; */


export default function ProductPage() {

  const { productId } = useParams();
  const { product, isLoading, error } = useProductById(productId);

/*   const { products, isLoading, error } = useProducts(); */
  const [currentProduct, setCurrentProduct] = useState();
  const [quantityCount, setQuantityCount] = useState(1);


  useEffect(() => {
    setCurrentProduct(product);
  }, [currentProduct, productId, product]);

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
