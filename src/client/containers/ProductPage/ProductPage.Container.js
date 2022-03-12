import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductPreview from '../../components/ProductPreview/ProductPreview.component';
import Carousel from '../../components/Carousel/Carousel';
import Loader from '../../components/Loader/Loader.component';
import './ProductPage.styles.css';

export default function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [products, setProducts] = useState();
  const [isProductLoading, setProductLoading] = useState(true);
  const [isProductsLoading, setProductsLoading] = useState(true);
  const [productError, setProductError] = useState();
  const [productsError, setProductsError] = useState();
  const [quantityCount, setQuantityCount] = useState(1);

  const fetchProduct = (id) => {
    const url = `/api/products/${id}`;
    return fetch(url).then((response) => response.json());
  };

  const fetchProducts = () => {
    const url = '/api/products';
    return fetch(url).then((response) => response.json());
  };

  useEffect(() => {
    fetchProduct(productId)
      .then((productResponse) => setProduct(productResponse))
      .catch((err) => setProductError(err))
      .finally(() => setProductLoading(false));
  }, [productId]);

  useEffect(() => {
    fetchProducts()
      .then((productsResponse) => setProducts(productsResponse))
      .catch((err) => setProductsError(err))
      .finally(() => setProductsLoading(false));
  }, []);

  return (
    <div className="product-page">
      {isProductLoading && <Loader />}
      {!isProductLoading && !productError && (
        <ProductPreview
          product={product}
          quantityCount={quantityCount}
          setQuantityCount={setQuantityCount}
        />
      )}
      {productError && (
        <h1>Error occurred while fetching products: {productError}</h1>
      )}
      <div className="products-carousel">
        {products && <Carousel products={products.items} />}
      </div>
    </div>
  );
}
