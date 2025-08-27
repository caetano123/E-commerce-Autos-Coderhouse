import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedItems = localStorage.getItem("cartItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
  setCartItems((prev) => {
    const existingItem = prev.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      const newQuantity = existingItem.quantity + (item.quantity || 1);
      if (newQuantity > item.stock) {
        alert("No hay suficiente stock disponible");
        return prev;
      }
      return prev.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: newQuantity } : cartItem
      );
    }
    if ((item.quantity || 1) > item.stock) {
      alert("No hay suficiente stock disponible");
      return prev;
    }
    return [...prev, item];
  });
};

  const removeFromCart = (idToRemove) => {
    setCartItems((prev) => prev.filter(item => item.id !== idToRemove));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{ cartItems, cartCount, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
