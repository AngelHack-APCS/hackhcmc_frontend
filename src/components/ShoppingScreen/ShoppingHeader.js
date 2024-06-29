import React from 'react';
import coin from '../../assets/coin_image.png';
import logo from '../../assets/capybara.png';
import cart from '../../assets/shopping-cart.png';

const ShoppingHeader = ({ balance, onCartToggle, cartItemCount }) => {
  return (
    <header className="bg-white pt-12 pr-4 pl-4 mb-6">
      <div className="mx-auto flex justify-between items-center">
        <div className="text-left mt-3 ml-2">
          <div className="flex items-center bg-colorPalette2 text-white rounded-full px-2 py-0.5">
            <img src={coin} alt="Coin" className="h-4 mr-1" />
            <span>{balance}</span>
          </div>
        </div>

        <div className="text-center">
          <img src={logo} alt="Logo" className="h-12 absolute top-12 left-1/2 transform -translate-x-1/2" />
        </div>
        
        <div className="text-right mt-2 relative" onClick={onCartToggle}>
          <img src={cart} alt="Cart" className="h-8 mr-2" />
          {cartItemCount > 0 && (
            <span className="text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center absolute top-0 right-0 -mt-1 -mr-1">
              {cartItemCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default ShoppingHeader;
