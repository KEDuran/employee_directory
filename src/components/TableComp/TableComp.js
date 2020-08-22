import React from "react";
import { Container, Row, Table } from "react-bootstrap";

function TableComp() {
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

export default TableComp;
