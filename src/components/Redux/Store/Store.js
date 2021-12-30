import { createStore, combineReducers, applyMiddleware } from "redux";
import productReducer from "../Reducer/Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const reducers = combineReducers({
	products: productReducer,
});
const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(thunk))
);
export default store;
