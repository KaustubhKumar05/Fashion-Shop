import { useContext, useRef } from "react";
import { CartContext } from "../contexts/CartContext";

const Product = ({ itemName, itemPrice, itemID }) => {
	const { addToCart } = useContext(CartContext);
	const itemCount = useRef(localStorage.getItem(itemID) || 0);

	return (
		<div
			className="product"
			onClick={() => {
				itemCount.current++;
				localStorage.setItem(itemID, itemCount.current);
				addToCart({
					name: itemName,
					price: itemPrice,
					ID: itemID,
					count: itemCount.current,
				});
			}}
		>
			<div className="icon"></div>
			<div className="bottom">
				<div className="details">
					<h1>{itemName}</h1>
					<h2>{itemPrice}</h2>
				</div>
				{itemCount.current ? (
					<h3 className="count">{itemCount.current}</h3>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default Product;
