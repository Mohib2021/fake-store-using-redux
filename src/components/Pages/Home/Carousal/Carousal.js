import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Row, Col } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
function Carousal() {
	return (
		<div style={{ padding: "30px" }}>
			<Carousel autoPlay={true} infiniteLoop={true}>
				{Array.from([0, 1, 2, 3], (x) => {
					return (
						<Row>
							<Col>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Corporis, sint quod. Dignissimos explicabo nulla culpa
									delectus laboriosam incidunt. Itaque ab delectus similique hic
									aliquam eligendi ea quidem magnam, dolores iure!
								</p>
							</Col>
							<Col>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Corporis, sint quod. Dignissimos explicabo nulla culpa
									delectus laboriosam incidunt. Itaque ab delectus similique hic
									aliquam eligendi ea quidem magnam, dolores iure!
								</p>
							</Col>
						</Row>
					);
				})}
			</Carousel>
		</div>
	);
}

export default Carousal;
