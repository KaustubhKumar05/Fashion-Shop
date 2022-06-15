import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

import Product from "./Product";

const DashBoard = () => {
	const { items } = useContext(CartContext);

	return (
		<main className="dashboard">
			{items.map((item) => (
				<Product
					key={item.ID}
					itemName={item.name}
					itemPrice={item.price}
					itemID={item.ID}
				/>
			))}
		</main>
	);
};

export default DashBoard;
