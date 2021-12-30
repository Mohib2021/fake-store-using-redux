import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowProducts from "./ShowProducts";
import { loadData } from "../../../Redux/Actions/Action";
import { Container, Row } from "react-bootstrap";
function Products() {
	const products = useSelector((state) => state.products.products);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadData());
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
