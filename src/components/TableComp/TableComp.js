import React, { Component } from "react";
import { Container, Row, Table } from "react-bootstrap";
import axios from "axios";

// function to call API data for TableComp
class TableComp extends Component {
	constructor() {
		super();
	}

	uponRefresh = async () => {
		var url = `https://randomuser.me/api/?results=200&nat=us`;

		await axios
			.get(url)
			.then(function (res) {})
			.catch(function (error) {
				console.log(error);
			});
	};

	componentDidMount() {
		this.uponRefresh();
	}

	render() {
		return (
			<Container>
				<Row>
					<Table>
						<thead>
							<tr>
								<th>Image</th>
								<th>Name</th>
								<th>Phone</th>
								<th>Email</th>
								<th>DOB</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Table cell</td>
								<td>Table cell</td>
								<td>Table cell</td>
								<td>Table cell</td>
								<td>Table cell</td>
							</tr>
						</tbody>
					</Table>
				</Row>
			</Container>
		);
	}
}

export default TableComp;
