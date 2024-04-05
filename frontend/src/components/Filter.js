import React, { useState } from 'react';

function Filter({ onChange }) {
  const [category, setCategory] = useState('');
  // Other filter states

  const handleFilterChange = () => {
    onChange({ category });
    // Update other filters
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        onBlur={handleFilterChange}
      />
      {/* Other filter inputs */}
    </div>
  );
}

export default Filter;
