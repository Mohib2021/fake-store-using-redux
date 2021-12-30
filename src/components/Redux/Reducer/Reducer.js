const initialState = {
	products: [],
	details: {},
};
const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case "LOAD_DATA": {
			return { ...state, products: action.payload, details: {} };
		}

		case "SHOW_DETAILS": {
			return { ...state, details: action.payload };
		}

		default:
			return state;
	}
};
export default productReducer;
