import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

/*Disables UNNECESSARY warnings associated with react-scripts, specifically resultings from 
using mdbreact component for the sort/search. This table was not designed to hold row key attributes.
Referenced this article for source code  -
https://stackoverflow.com/questions/41111338/how-to-clear-disable-minor-and-warnings-console-log-error */
console.warn = console.error = () => {};

ReactDOM.render(<App />, document.getElementById("root"));
