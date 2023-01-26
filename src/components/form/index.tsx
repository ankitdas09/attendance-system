import React from "react";
import { useState } from "react";
import "./styles.scss";
const Form = () => {
	const [roll, setRoll] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [inTime, setInTime] = useState<string>("");
	const [outTime, setOutTime] = useState<string>("");

	return (
		<div className="studentForm">
			<table>
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
					<td>
						<label htmlFor="intime">In Time:</label>
					</td>
					<td>
						<input
							type="time"
							id="intime"
							className="inputDATE"
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
							className="inputDATE"
							onChange={(e) => setOutTime(e.target.value)}
						/>
					</td>
				</tr>
				<tr>
					<td colSpan={2}>
						<button className="btn">Add</button>
					</td>
				</tr>
			</table>
		</div>
	);
};

export default Form;
