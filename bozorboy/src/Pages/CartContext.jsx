// CartContext.js
import React, { createContext, useContext, useState } from 'react';

// Создаем контекст для корзины
const CartContext = createContext();

// Поставщик контекста, чтобы обернуть в него все компоненты, которым нужно знать о корзине
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Функция для добавления товара в корзину
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.name === product.name);
            if (existingProduct) {
                return prevCart.map(item => 
                    item.name === product.name
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    // Функция для получения общей стоимости
    const getTotalPrice = () => {
        return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

// Хук для использования контекста
export const useCart = () => useContext(CartContext);