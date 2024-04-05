import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';

function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details from backend API based on id
    // Example: fetchProductDetails(id).then(data => setProduct(data));
  }, [id]);

  return (
    <div>
      <h1>Product Details</h1>
      {product && <ProductDetails product={product} />}
    </div>
  );
}

export default ProductDetailsPage;
