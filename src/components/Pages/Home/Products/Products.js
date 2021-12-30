import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowProducts from "./ShowProducts";
import { Container, Row } from "react-bootstrap";
import {
	fetchAllProducts,
	fetchSingleProduct,
} from "../../../Redux/Reducer/Reducer";
function Products() {
	const products = useSelector((state) => state.products.products);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAllProducts());
	}, []);
	return (
		<div className="my-5">
			<Container>
				<Row className="g-4">
					{products.map((product) => (
						<ShowProducts key={product.id} product={product} />
					))}
				</Row>
			</Container>
		</div>
	);
}

export default Products;
