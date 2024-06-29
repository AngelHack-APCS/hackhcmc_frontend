import React from 'react';
import coin from '../../assets/coin_image.png';

const CartItem = ({ itemName, itemPrice, itemImage, onClickPlus, onClickMinus, isActive }) => {
  return (
    <div 
      className={`max-w-xs mx-auto rounded-lg bg-colorPalette1 p-1.5 ${isActive ? 'border-4 border-colorPalette3' : 'border border-colorPalette4'} transition-all duration-50 ease-in-out`}
    >
      <img 
        src={itemImage} 
        alt={itemName} 
        className="w-full rounded-md" 
      />
      <div className="text-left ml-2 justify-between">
        <h2 className="text-lg font-bold">{itemName}</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl">
              <img src={coin} alt="coin" className="w-4 h-4 inline-block" />
            </span>
            <span className="text-1xl ml-1 mt-1 align-middle text-colorPalette3 font-medium">{itemPrice}</span>
          </div>
          <div className="inline-block flex space-x-2">
            <button 
              className="bg-colorPalette2 text-white px-2 rounded-full mt-2" 
              onClick={onClickMinus}
            >
              -
            </button>
            <button 
              className="bg-colorPalette2 text-white px-2 rounded-full mt-2" 
              onClick={onClickPlus}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
