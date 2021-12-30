import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function ShowProducts({ product }) {
	const { image, title, price, rating, id } = product;
	return (
		<Col sm={6} md={3}>
			<div
				style={{
					boxShadow: "0px 0px 10px gray",
					padding: "10px",
					borderRadius: "10px",
				}}
			>
				<div>
					<img className="img-fluid" src={image} alt="product" />
				</div>
				<div>
					<h3>{title}</h3>
					<h5>${price}</h5>
					<Link to={`/details/${id}`}>
						<button className="btn btn-primary">Buy Now</button>
					</Link>
				</div>
			</div>
		</Col>
	);
}

export default ShowProducts;
