import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ShoppingScreen/ItemList";
import ShoppingHeader from "../components/ShoppingScreen/ShoppingHeader";
import ShoppingCategoryList from "../components/ShoppingScreen/ShoppingCategoryList";
import Cart from "../components/ShoppingScreen/Cart";
import "../css/ShoppingScreen.css";
import BottomNavigation from "../components/BottomNavigation";

const categories = ["All", "Toys", "Backpacks"];

const ShoppingScreen = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  useEffect(() => {
    const fetchItems = async (pageNum) => {
      try {
        const response = await fetch(
          `http://localhost:5000/shop/items/?page=${pageNum}&limit=20`
        );
        const data = await response.json();
        setItems(data);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems(currentPage);
  }, [currentPage]);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prevCartItems) => {
      const newCartItems = [...prevCartItems];
      newCartItems.splice(index, 1);
      return newCartItems;
    });
  };

  return (
    <div className="relative bg-white h-screen font-sans overflow-hidden">
      <ShoppingHeader
        balance={10}
        onCartToggle={() => setIsCartOpen(!isCartOpen)}
        cartItemCount={cartItems.length}
      />
      <div>
        <div
          className={`absolute transition-transform duration-500 transform ${
            isCartOpen ? "translate-y-0" : "translate-y-[300%]"
          }`}
          style={{ zIndex: 10 }}
        >
          <Cart
            items={cartItems}
            name="Andy"
            onClose={handleCartClose}
            onRemoveItem={handleRemoveFromCart}
          />
        </div>
        <div>
          <ShoppingCategoryList categories={categories} />
          <div className="overflow-y-auto item-list-height pb-3">
            <ItemList items={items} onAddToCart={handleAddToCart} />
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default ShoppingScreen;
