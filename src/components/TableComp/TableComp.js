import React, { Component } from "react";
import axios from "axios";
import { MDBDataTable } from "mdbreact";
import "./style.css";

// function to call API data for TableComp
class TableComp extends Component {
	constructor() {
		super();
		this.state = {
			employees: [],
			columns: [
				{
					label: "Image",
					field: "image",
					sort: "asc",
					width: 150,
				},
				{
					label: "Name",
					field: "name",
					sort: "asc",
					width: 200,
				},
				{
					label: "Phone",
					field: "phone",
					sort: "asc",
					width: 200,
				},
				{
					label: "Email",
					field: "email",
					sort: "asc",
					width: 200,
				},
				{
					label: "DOB",
					field: "dob",
					sort: "asc",
					width: 200,
				},
			],
		};
	}

	formatDate(dateString) {
		var date = new Date(dateString);
		return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
	}

	uponRefresh = async () => {
		var url = `https://randomuser.me/api/?results=200&nat=us`;

		await axios
			.get(url)
			.then((res) => {
				var employeeData = [];
				for (var i = 0; i < res.data.results.length; i++) {
					var singleEmployee = {
						image: [<img src={res.data.results[i].picture.thumbnail} alt="" />],
						name: `${res.data.results[i].name.first} ${res.data.results[i].name.last}`,
						phone: res.data.results[i].phone,
						email: res.data.results[i].email,
						dob: this.formatDate(res.data.results[i].dob.date),
					};
					employeeData.push(singleEmployee);
				}
				this.setState({
					employees: employeeData,
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	componentDidMount() {
		this.uponRefresh();
	}

	render() {
		return (
			<MDBDataTable
				data={{ columns: this.state.columns, rows: this.state.employees }}
				sorting="true"
			/>
		);
	}
}

export default TableComp;
