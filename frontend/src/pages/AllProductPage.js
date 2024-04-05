import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import Filter from '../components/Filter';

function AllProductsPage() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    // Fetch products from backend API based on filters
    // Example: fetchProducts(filters).then(data => setProducts(data));
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <h1>All Products</h1>
      <Filter onChange={handleFilterChange} />
      <ProductList products={products} />
    </div>
  );
}

export default AllProductsPage;
