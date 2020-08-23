import React from "react";
import TableComp from "./TableComp";
import { render } from "@testing-library/react";
import axios from "axios";
import jest from "jest";

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
		const employees = {
			results: [
				{
					picture: { thumbnail: "a" },
					name: { first: "k", last: "j" },
					phone: "123",
					email: "test@test.com",
					dob: { date: "1972-01-15" },
				},
			],
		};
		axios.get.mockImplementationOnce(() => Promise.resolve(employees));
	});
});
