import React from "react";
import { useState } from "react";
import { IData } from "./interfaces";
import Form from "./components/form";
import Display from "./components/display";
function App() {
	const [data, setData] = useState<IData[]>([]);

	const handleAddNewStudent = (args: IData) => {
		setData([
			...data,
			{
				name: args.name,
				rollNumber: args.rollNumber,
				inTime: args.inTime,
				outTime: args.outTime,
			},
		]);
	};

	return (
		<div
			className="App"
			style={{
				backgroundColor: "#17191b",
				minHeight: "100vh",
				color: "#fff",
			}}
		>
			<div className="container p-5">
				<div className="row">
					<div className="col-lg-8 col-md-6 col-sm-12">
						<Form handleAddNewStudent={handleAddNewStudent} />
					</div>
					<div className="col-lg-4 col-md-6">
						<h4 className="text-right">
							Class Strength: <span className="text-success">{data.length}</span>
						</h4>
					</div>
				</div>
				<span className="mb-5 d-block"></span>
				<h5>Students:</h5>
				<Display data={data} />
			</div>
		</div>
	);
}

export default App;
