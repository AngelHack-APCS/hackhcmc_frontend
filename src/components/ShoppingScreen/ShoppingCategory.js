// ShoppingCategory.js

import React from "react";

const ShoppingCategory = ({ category, isSelected, onClick }) => {
  return (
    <div
      className={`flex items-center rounded-full px-2 py-1 ${
        isSelected
          ? "bg-colorPalette2 text-white"
          : "bg-colorPalette1 text-black"
      }`}
      onClick={() => onClick(category)}
    >
      <span className="ml-2 mr-2">{category}</span>
    </div>
  );
};

export default ShoppingCategory;
