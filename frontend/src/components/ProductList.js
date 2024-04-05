import React from 'react';

function ProductList({ products }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          {/* Display other product details */}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
