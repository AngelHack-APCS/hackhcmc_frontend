import React from 'react';
import Item from './Item'; // Adjust the path according to your file structure

const ItemList = ({ items, onAddToCart }) => {
  if (!items || items.length === 0) {
    return <div className="text-center text-2xl mt-10">No items found</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-6 pl-6">
      {items.map((item, index) => (
        <Item
          key={index}
          item={item}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ItemList;
