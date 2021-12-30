import { configureStore } from "@reduxjs/toolkit";
import Reducer from "../Reducer/Reducer";

const store = configureStore({
	reducer: {
		products: Reducer,
	},
});
export default store;
