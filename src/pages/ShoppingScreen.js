import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ShoppingScreen/ItemList';
import ShoppingHeader from '../components/ShoppingScreen/ShoppingHeader';
import ShoppingCategoryList from '../components/ShoppingScreen/ShoppingCategoryList';
import Cart from '../components/ShoppingScreen/Cart';
import '../css/ShoppingScreen.css';
import BottomNavigation from '../components/BottomNavigation';
import ChatbotButton from '../components/ChildrenScreen/ChatbotButton';

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
        const response = await fetch(`http://localhost:5000/shop/items/?page=${pageNum}`);
        const data = await response.json();
        setItems(data);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error('Error fetching items:', error);
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

  const handleRemoveFromCart = (index) => {
    setCartItems((prevCartItems) => {
      const newCartItems = prevCartItems.map((item, i) => 
        i === index ? { ...item, quantity: item.quantity - 1 } : item
      );
      if (newCartItems[index].quantity === 0) {
        newCartItems.splice(index, 1);
      }
      return newCartItems;
    });
  };
  
  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => {
      const itemIndex = prevCartItems.findIndex((cartItem) => cartItem.id === item.id);
  
      if (itemIndex !== -1) {
        return prevCartItems.map((cartItem, index) =>
          index === itemIndex ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
  
      return [...prevCartItems, { ...item, quantity: 1 }];
    });
  };
  

  return (
    <div className="relative bg-white h-screen font-sans overflow-hidden">
      <ShoppingHeader balance={10} onCartToggle={() => setIsCartOpen(!isCartOpen)} cartItemCount={cartItems.length} />
      <div>
        <div className={`absolute transition-transform duration-500 transform ${isCartOpen ? 'translate-y-0' : 'translate-y-[300%]'}`} style={{ zIndex: 10 }}>
          <Cart 
            items={cartItems} 
            name="Andy" 
            onClose={handleCartClose} 
            onAddItem={handleAddToCart}
            onRemoveItem={handleRemoveFromCart} 
          />
        </div>
        <div>
          <ShoppingCategoryList categories={categories} />
          <div className='overflow-y-auto item-list-height pb-3'>
            <ItemList items={items} onAddToCart={handleAddToCart} />
          </div>
        </div>
      </div>
      <div className="flex-shrink-0">
        <BottomNavigation />
      </div>
    </div>
  );
};

export default ShoppingScreen;
