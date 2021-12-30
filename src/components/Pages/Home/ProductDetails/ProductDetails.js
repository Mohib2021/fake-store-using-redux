import React, { useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { showDetails } from "../../../Redux/Actions/Action";
function ProductDetails() {
	const product = useSelector((state) => state.products.details);
	const { image, title, description, price } = product;
	console.log(product);
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(showDetails(id));
	}, []);
	if (!product.image) {
		return (
			<div className="text-center my-5">
				<Spinner animation="grow"></Spinner>
			</div>
		);
	}
	return (
		<div className="my-5">
			<Container>
				<Row className="align-items-center">
					<Col>
						<div>
							<img src={image} alt="product" className="img-fluid" />
						</div>
					</Col>
					<Col>
						<div>
							<h3>{title}</h3>
							<p>
								{description} Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
								amet, consectetur adipisicing elit. Non porro aut sed quibusdam!
								Magni, facere! Nisi ipsam ullam nulla illum consequuntur beatae
								vero eum laborum quia accusamus. Ducimus natus magni non est
								optio. Cupiditate vel et odio nam libero. Reprehenderit,
								recusandae fugit error iste numquam a necessitatibus alias harum
								aliquid! Lorem ipsum dolor sit amet consectetur, adipisicing
								elit. Illo repellat expedita iure consequatur magnam, nobis
								ratione molestiae maiores itaque, est error ullam dignissimos
								voluptates sint commodi voluptas eum adipisci sit asperiores
								voluptatum. Animi fugit, a quibusdam, laboriosam magnam ipsum
								error earum officiis quod quas cupiditate dolor voluptas non ut,
								quo repellat reprehenderit excepturi libero illo sapiente
								corporis dolores quis fugiat!
							</p>
							<h5>${price}</h5>
							<button className="btn btn-success">Place Order</button>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default ProductDetails;
