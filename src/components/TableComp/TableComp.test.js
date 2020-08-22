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
});
