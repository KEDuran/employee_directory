import React from "react";
import Header from "./Header";
import { render } from '@testing-library/react'


// test to make sure the header renders
test("loads and displays header", async () => {
	render(<Header />);
});
