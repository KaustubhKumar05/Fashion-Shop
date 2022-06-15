import "./App.scss";
import Nav from "./components/Nav";
import DashBoard from "./components/DashBoard";
import CheckOut from "./components/CheckOut";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartProvider from "./contexts/CartContext";

function App() {
	localStorage.clear();
	return (
		<div className="app">
			<CartProvider>
				<Router>
					<Nav />
					<Routes>
						<Route exact path="/" element={<DashBoard />} />
						<Route path="/checkout" element={<CheckOut />} />
					</Routes>
				</Router>
			</CartProvider>
		</div>
	);
}

export default App;
