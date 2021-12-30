import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
	products: [],
	details: {},
};
export const fetchAllProducts = createAsyncThunk(
	"products/fetchAllProducts",
	async () => {
		const response = await axios.get("https://fakestoreapi.com/products");

		return response.data;
	}
);
export const fetchSingleProduct = createAsyncThunk(
	"product/fetchSingleProduct",
	async (id) => {
		const response = await axios.get(`https://fakestoreapi.com/products/${id}`);

		return response.data;
	}
);
const productSlice = createSlice({
	name: "product/slice",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
			state.products = action.payload;
			state.details = {};
		});
		builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
			state.details = action.payload;
		});
	},
});

export default productSlice.reducer;
