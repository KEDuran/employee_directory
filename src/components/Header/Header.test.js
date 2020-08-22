import React from "react";
import Header from "./Header";
import { render } from '@testing-library/react'

test("loads and displays header", async () => {
	render(<Header />);
});
