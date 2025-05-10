import { useState } from "react";
import UnitConverter from "./components/unitConverter";
import Calculator from "./components/calculator/Calculator";

function App() {
	return (
		<>
			<div className="bg-gradient-to-r from-indigo-500 from-20% via-sky-500 via-30% to-emerald-500 to-70% ">
				<h1 className="text-center text-3xl py-5 shadow-2xl">ThermoTools</h1>
				<div className="flex gap-30 justify-center items-center h-screen">
					<UnitConverter />
					<Calculator />
				</div>
			</div>
		</>
	);
}

export default App;
