import React, { useState } from 'react';
import coin from '../../assets/coin_image.png'; // Ensure this path is correct

const Item = ({ item, onAddToCart }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoom = () => {
    setIsZoomed(true);
    setTimeout(() => setIsZoomed(false), 400); // Reset the zoom after 0.4s
    onAddToCart(item);
  };

  return (
    <div 
      className={`max-w-xs mx-auto rounded-lg bg-colorPalette1 p-1.5 transform transition-transform duration-500 ${isZoomed ? 'scale-110' : 'scale-100'}`}
    >
      <img 
        src={item.image_url} 
        alt={item.name} 
        className="w-full rounded-md" 
      />
      <div className="text-left ml-2 justify-between">
        <h2 className="text-lg font-bold">{item.name}</h2>
        <div className="flex items-center justify-between"> {/* Added justify-between here */}
          <div className="flex items-center"> {/* Maintain items-center for vertical alignment */}
            <span className="text-2xl">
              <img src={coin} alt="coin" className="w-4 h-4 inline-block" /> {/* Adjusted size of coin */}
            </span>
            <span className="text-1xl ml-1 mt-1 align-middle text-colorPalette3 font-medium">{item.price}</span>
          </div>
          <div className="inline-block">
            <button 
              className="bg-colorPalette2 text-white px-2 rounded-full mt-2" 
              onClick={handleZoom}
            >
              +
            </button> {/* Removed w-full to prevent full width */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
