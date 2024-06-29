import React from 'react';
import CartItem from './CartItem';

const CartItemList = ({ items, activeItems, onItemToggle, onItemAdd, onItemRemove }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-6 pl-6">
      {items.map((item, index) => (
        <CartItem
          key={index}
          itemName={item.name}
          itemPrice={item.price}
          itemImage={item.image_url}
          itemQuantity={item.quantity}
          onClick={() => onItemToggle(index)}
          onClickPlus={() => onItemAdd(index)}
          onClickMinus={() => onItemRemove(index)}
          isActive={activeItems[index]}
        />
      ))}
    </div>
  );
};

export default CartItemList;
