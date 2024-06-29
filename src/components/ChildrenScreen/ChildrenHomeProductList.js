// src/components/ChildrenHomeProductList.js
import React from 'react';
import ChildrenHomeProduct from './ChildrenHomeProduct';

const ChildrenHomeProductList = () => {
  const products = [
    { id: 1, name: 'Lego Spaceship', points: 2190 },
    { id: 2, name: 'Lego Car', points: 1500 },
    { id: 3, name: 'Lego Castle', points: 3000 },
    // Add more products as needed
  ];

  return (
    <div className="overflow-x-scroll whitespace-nowrap p-2">
      {products.map((product) => (
        <div key={product.id} className="inline-block mr-4">
          <ChildrenHomeProduct name={product.name} points={product.points} />
        </div>
      ))}
    </div>
  );
};

export default ChildrenHomeProductList;
