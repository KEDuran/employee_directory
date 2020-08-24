import React from "react";
import Header from "./components/Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import TableComp from "./components/TableComp/TableComp";

function App() {
	return (
		<Container fluid>
			<Header />
			<Row>
				<Col>
					<TableComp />
				</Col>
			</Row>
		</Container>
	);
}

export default App;
