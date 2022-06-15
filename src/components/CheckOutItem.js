import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const CheckOutItem = ({ item }) => {
	const { removeFromCart } = useContext(CartContext);
	return (
		<div className="checkout-item">
			<div className="details">
				<h1>{item.name}</h1>
				<h1>${item.price}</h1>
				{item.count ? <h1>{item.count}</h1> : ""}
			</div>
			<h1 className="checkout-item-remove" onClick={() => removeFromCart(item)}>
				Remove
			</h1>
		</div>
	);
};

export default CheckOutItem;
