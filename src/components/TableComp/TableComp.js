import React from "react";
import { Container, Table } from "react-bootstrap";

function TableComp() {
	return (
		<Container>
			<Table responsive="sm">
				<thead>
					<tr>
						<th>#</th>
						<th>Table heading</th>
						<th>Table heading</th>
						<th>Table heading</th>
						<th>Table heading</th>
						<th>Table heading</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
					</tr>
				</tbody>
			</Table>
		</Container>
	);
}

export default TableComp;
