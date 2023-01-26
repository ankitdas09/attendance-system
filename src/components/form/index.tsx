import React from "react";
import { useState } from "react";
import "./styles.scss";
import { IData } from "../../interfaces";

interface ComponentProps {
	handleAddNewStudent: (args: IData) => void;
}

const Form = (props: ComponentProps) => {
	const [roll, setRoll] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [inTime, setInTime] = useState<string>("00:00");
	const [outTime, setOutTime] = useState<string>("00:00");

	const handleClick = () => {
		if (!name || !roll || !inTime || !outTime) return;
		props.handleAddNewStudent({
			rollNumber: roll,
			name: name,
			inTime: inTime,
			outTime: outTime,
		});
		setRoll("");
		setName("");
		setInTime("00:00");
		setOutTime("00:00");
	};

	return (
		<div className="studentForm">
			<h5>Add new student:</h5>
			<table>
				<tbody>
					<tr>
						<td colSpan={2}>
							<input
								className="inputTEXT"
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder="Name"
							/>
						</td>
					</tr>
					<tr>
						<td colSpan={2}>
							<input
								className="inputTEXT"
								type="text"
								value={roll}
								onChange={(e) => setRoll(e.target.value)}
								placeholder="Roll Number"
							/>
						</td>
					</tr>
					<tr>
						<td>
							<label htmlFor="intime">In Time:</label>
						</td>
						<td>
							<input
								type="time"
								id="intime"
								className="inputDATE"
								value={inTime}
								onChange={(e) => setInTime(e.target.value)}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<label htmlFor="intime">Out Time:</label>
						</td>
						<td>
							<input
								type="time"
								id="outtime"
								value={outTime}
								className="inputDATE"
								onChange={(e) => setOutTime(e.target.value)}
							/>
						</td>
					</tr>
					<tr>
						<td colSpan={2}>
							<button className="btn" onClick={() => handleClick()}>
								Add
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Form;
