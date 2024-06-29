import React from 'react';
import CartItem from './CartItem';

const CartItemList = ({ items, activeItems, onItemToggle, onItemRemove }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mr-2 ml-2 p-2">
      {items.map((item, index) => (
        <CartItem
          key={index}
          itemName={item.name}
          itemPrice={item.price}
          itemImage={item.image_url}
          onClickPlus={() => onItemToggle(index)}
          onClickMinus={() => onItemRemove(index)}
          isActive={activeItems[index]}
        />
      ))}
    </div>
  );
};

export default CartItemList;
