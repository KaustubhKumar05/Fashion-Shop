import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const items = [
		{ name: "Shirt", price: 100, ID: 1, count: 0 },
		{ name: "Pant", price: 80, ID: 2, count: 0 },
		{ name: "Jacket", price: 250, ID: 3, count: 0 },
		{ name: "Blazer", price: 180, ID: 4, count: 0 },
		{ name: "Tie", price: 50, ID: 5, count: 0 },
		{ name: "Shoes", price: 80, ID: 6, count: 0 },
		{ name: "Socks", price: 20, ID: 7, count: 0 },
	];
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (item) => {
		const cartItemsCopy = cartItems.filter(
			(cartItem) => cartItem.ID !== item.ID
		);
		cartItemsCopy.push(item);
		setCartItems(cartItemsCopy);
	};

	const removeFromCart = (item) => {
		// const cartItemsCopy = cartItems.filter(
		// 	(cartItem) => cartItem.ID !== item.ID
		// );
		let cartItemsCopy = [...cartItems];
		if (item.count === 1) {
			cartItemsCopy = cartItemsCopy.filter(
				(cartItemCopy) => cartItemCopy.ID !== item.ID
			);
			localStorage.removeItem(item.ID);
		} else {
			cartItemsCopy.forEach((cartItemCopy) => {
				if (cartItemCopy.ID === item.ID) cartItemCopy.count -= 1;
			});
			localStorage.setItem(item.ID, item.count);
		}
		console.log(cartItemsCopy);
		setCartItems([...cartItemsCopy]);
	};

	return (
		<CartContext.Provider
			value={{ items, cartItems, addToCart, removeFromCart }}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
