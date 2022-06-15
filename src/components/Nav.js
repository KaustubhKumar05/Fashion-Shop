import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
	const { cartItems } = useContext(CartContext);

	const location = useLocation();

	const getCount = (cartItems) => {
		let count = 0;
		cartItems.forEach((cartItem) => (count += cartItem.count));
		return count;
	};

	return (
		<nav className="nav-bar">
			Fashion
			<span>
				{location.pathname === "/checkout" ? (
					<Link to="/">Home</Link>
				) : (
					<Link to="/checkout">Items in cart: {getCount(cartItems)}</Link>
				)}
			</span>
		</nav>
	);
};

export default Nav;
