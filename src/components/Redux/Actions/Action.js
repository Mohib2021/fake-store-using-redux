import axios from "axios";
export const showDetails = (payload) => {
	return async (dispatch) => {
		const product = await axios.get(
			`https://fakestoreapi.com/products/${payload}`
		);
		dispatch({
			type: "SHOW_DETAILS",
			payload: product.data,
		});
	};
};
export const loadData = () => {
	return async (dispatch) => {
		const products = await axios.get("https://fakestoreapi.com/products");
		dispatch({
			type: "LOAD_DATA",
			payload: products.data,
		});
	};
};
