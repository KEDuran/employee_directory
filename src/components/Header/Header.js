import React from "react";
import { Row } from "react-bootstrap";
import "./style.css";

function Header() {
	return (
		<div className="background">
			<Row className="center-align text-light pt-2">
				<h2>Employee Directory</h2>
			</Row>
			<Row className="center-align text-light pb-2">
				<h6>Use the search box to narrow your results.</h6>
			</Row>
		</div>
	);
}

export default Header;
