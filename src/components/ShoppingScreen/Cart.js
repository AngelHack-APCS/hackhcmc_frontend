import React, { useState, useEffect } from 'react';
import CartItemList from './CartItemList';
import close from '../../assets/close.png';
import coin from '../../assets/coin_image.png';
import '../../css/Cart.css';

const Cart = ({ items, name, onClose, onAddItem ,onRemoveItem }) => {
  const [activeItems, setActiveItems] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = items.reduce((sum, item, index) => {
      if (activeItems[index]) {
        return sum + parseInt(item.price) * item.quantity;
      }
      return sum;
    }, 0);
    setTotal(newTotal || 0);
  }, [items, activeItems]);

  const handleItemToggle = (index) => {
    setActiveItems((prevActiveItems) => ({
      ...prevActiveItems,
      [index]: !prevActiveItems[index],
    }));
  };

  const handleItemAdd = (index) => {
    onAddItem(index)
  };

  const handleItemRemove = (index) => {
    onRemoveItem(index);
  };

  return (
    <div className="bg-colorPalette1 p-4 rounded-lg max-h-full relative min-w-[430px]">
      <div className="flex items-center justify-between mb-4">
        <button onClick={onClose} className="pl-2">
          <img src={close} className="h-5 w-5" alt="Close" />
        </button>
        <h1 className="text-2xl font-bold text-center flex-1">Cart</h1>
      </div>
      {items.length > 0 ? (
        <div>
          <div className="overflow-y-auto height mb-8">
            <CartItemList 
              items={items} 
              activeItems={activeItems} 
              onItemToggle={handleItemToggle} 
              onItemAdd={handleItemAdd}
              onItemRemove={handleItemRemove} 
            />
          </div>
          <div className="bottom-0 left-0 w-full bg-colorPalette1 pr-4 pl-4 mb-10">
            <hr className="pb-4 border-t-2 border-colorPalette4" />
            <div className="flex items-center justify-between pl-2">
              <div className="text-xl font-semibold flex">
                <span>Total: {total}</span>
                <img src={coin} alt="Coin" className="h-5 ml-1 mt-1" />
              </div>
              <button className="bg-colorPalette2 text-white px-4 py-2 rounded-full">
                Request Payment
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="text-center text-gray-400 py-8 pb-20 mb-20">
            Your cart is empty.
          </div>
          <div className="pb-20 mb-20">
          </div>
        </div>
      )}
      <div className='bg-colorPalette1 mb-20 pb-20'></div>
      <div className='bg-colorPalette1 mb-24 pb-24'></div>
    </div>
  );
};

export default Cart;
