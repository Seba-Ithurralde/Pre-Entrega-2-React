import { useEffect, useState } from 'react';
import { getProducts } from './asyncMock.js';
import ProductCard from './ProductCard.jsx';
import './ProductList.css';
import React from 'react';

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts.then((data) => setProducts(data));
  }, []);


  return (
    <>
      <section className="card">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}
