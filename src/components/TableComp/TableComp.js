import React, { Component } from "react";
import { Container, Row, Table } from "react-bootstrap";
import axios from "axios";

// function to call API data for TableComp
class TableComp extends Component {
	constructor() {
		super();
		this.state = {
			employees: [],
		};
	}

	uponRefresh = async () => {
		var url = `https://randomuser.me/api/?results=200&nat=us`;

		await axios
			.get(url)
			.then((res) => {
				this.setState({
					employees: res.data.results,
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
							{this.state.employees.map((employee, i) => (
								<tr key={i}>
									<td>
										<img src={employee.picture.thumbnail}></img>
									</td>
									<td>{`${employee.name.first} ${employee.name.last}`}</td>
									<td>{employee.phone}</td>
									<td>{employee.email}</td>
									<td>{employee.dob.date}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</Row>
			</Container>
		);
	}
}

export default TableComp;
