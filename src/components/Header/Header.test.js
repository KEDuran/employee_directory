import React from "react";
import Header from "./Header";
import { render } from "@testing-library/react";
import { Row } from "react-bootstrap";

// test to make sure the header component renders
test("loads and displays header", async () => {
	render(<Header />);
});
// test to see if row component renders
test("renders a row component", async () => {
	render(<Row></Row>)
})
