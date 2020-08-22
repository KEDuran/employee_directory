import React from "react";
import TableComp from "./TableComp";
import { render } from "@testing-library/react";

describe("TableComp", () => {
	// test to make sure the table renders
	test("renders table header", async () => {
		render("<thead></thead>");
	});

	// test to make sure the table renders
	test("renders table body", async () => {
		render("<tbody></tbody>");
	});

	// checks for the existence of a JSON file
	test("checking that data from employee.json populates", async () => {
		// Arrange
		const { container, debug } = render(<TableComp name="John" />);
		// Act & Assert
		expect(container).toContainHTML("<td>John</td>");
	});
});
