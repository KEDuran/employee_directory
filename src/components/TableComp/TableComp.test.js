import React from "react";
import TableComp from "./TableComp";
import { render } from "@testing-library/react";
import axios from "axios";

import { MDBDataTable } from "mdbreact";
// import jest from "jest";

jest.mock("axios");

describe("TableComp", () => {
	// test to make sure the table renders
	test("renders table header", async () => {
		render("<thead></thead>");
	});

	// test to make sure the table renders
	test("renders table body", async () => {
		render("<tbody></tbody>");
	});
	// test to make sure data is calling from API
	test("fetches data from an API", async () => {
		// creates a mock employee JSON object
		const employees = {
			data: {
				results: [
					{
						picture: { thumbnail: "a" },
						name: { first: "k", last: "j" },
						phone: "123",
						email: "test@test.com",
						dob: { date: "1972-01-15" },
					},
				],
			},
		};
		// binds the axios calls to the employees JSON object
		axios.get.mockImplementationOnce(() => Promise.resolve(employees));
		// table component will make API call when rendered
		render(<TableComp />);
		// checks for AXIOS to call from the API URL
		expect(axios.get).toHaveBeenCalledWith(
			`https://randomuser.me/api/?results=200&nat=us`
		);
	});
	// test to make sure MDB table renders
	test("render MDB table", () => {
		var data = {
			columns: [
				{
					label: "Name",
					field: "name",
					sort: "asc",
					width: 150,
				},
				{
					label: "Position",
					field: "position",
					sort: "asc",
					width: 270,
				},
			],
			rows: [
				{
					name: "Tiger Nixon",
					position: "System Architect",
				},
				{
					name: "Garrett Winters",
					position: "Accountant",
				},
			],
		};

		render(<MDBDataTable data={data} sorting="true" />);
	});
});
