import React from "react";
import { Row, Col } from "react-bootstrap";
import "./style.css";

function Header() {
	return (
		<Row className="background center-align flex-column">
			<Col>
				<div className="center-align text-light pt-2">
					<h2>Employee Directory</h2>
				</div>
				<div className="center-align text-light pb-2">
					<h6>Use the search box to narrow your results.</h6>
				</div>
			</Col>
		</Row>
	);
}

export default Header;
