// ShoppingCategoryList.js

import React, { useState } from 'react';
import ShoppingCategory from './ShoppingCategory';

let currentCategory = "All"; // Define currentCategory as a variable outside the component

const ShoppingCategoryList = ({ categories }) => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        currentCategory = category; // Update currentCategory when a category is clicked
    };

    return (
        <div className="flex space-x-4 mb-7 mt-10 ml-2 pl-4">
            {categories.map((category, index) => (
                <ShoppingCategory
                    key={index}
                    category={category}
                    isSelected={selectedCategory === category}
                    onClick={handleCategoryClick}
                />
            ))}
        </div>
    );
};

export { currentCategory }; // Export currentCategory variable
export default ShoppingCategoryList;
