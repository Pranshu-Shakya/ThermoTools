import { useState } from "react";
import UnitConverter from "./components/unitConverter";
import SteamTable from "./components/SteamTable";

function App() {
	return (
		<>
			<div className="min-h-screen bg-gray-100 p-8">
				<h1 className="text-3xl font-bold text-center mb-6">ThermoTools Web App</h1>
				{/* <UnitConverter /> */}
        <SteamTable />
			</div>
		</>
	);
}

export default App;
