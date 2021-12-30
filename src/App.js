import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import ProductDetails from "./components/Pages/Home/ProductDetails/ProductDetails";
import NotFound from "./components/Pages/NotFound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/details/:id" element={<ProductDetails />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
