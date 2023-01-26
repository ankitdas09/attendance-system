import React from "react";
import { useState } from "react";

import Form from "./components/form";
function App() {
	const [rolls, setRolls] = useState<string[]>([]);

	return (
		<div className="App">
			<Form />
		</div>
	);
}

export default App;
