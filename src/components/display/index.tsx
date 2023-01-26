import React from "react";
import { IData } from "../../interfaces";

const Display = (props: { data: IData[] }) => {
	return (
		<>
			<table className="table table-dark table-striped">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Roll Number</th>
						<th scope="col">Name</th>
						<th scope="col">In Time</th>
						<th scope="col">Out Time</th>
					</tr>
				</thead>
				<tbody>
					{props.data.map((item, index) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>{item.rollNumber}</td>
							<td>{item.name}</td>
							<td>{item.inTime}</td>
							<td>{item.outTime}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Display;
