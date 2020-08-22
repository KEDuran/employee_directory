import React from "react";
import TableComp from "./TableComp";
import { render } from '@testing-library/react'

// test to make sure the table renders
test("loads and displays table", async () => {
	render(<TableComp />);
});