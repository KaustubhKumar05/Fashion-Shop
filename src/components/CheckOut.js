import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CheckOutItem from "./CheckOutItem";

const CheckOut = () => {
	const { cartItems } = useContext(CartContext);
	return (
		<div className="checkout-list">
			<div className="checkout-title">
				{cartItems.length ? "Items in cart:" : "The cart is empty!"}
			</div>
			{cartItems.map((cartItem) => {
					return <CheckOutItem key={cartItem.ID} item={cartItem} />;
			})}
		</div>
	);
};

export default CheckOut;
