import { useState } from "react";

const unitData = {
	pressure: {
		Pa: 1,
		kPa: 1000,
		bar: 100000,
		atm: 101325,
	},
	temperature: {
		C: { toK: (val) => val + 273.15, fromK: (val) => val - 273.15 },
		K: { toK: (val) => val, fromK: (val) => val },
		F: {
			toK: (val) => (val - 32) * (5 / 9) + 273.15,
			fromK: (val) => (val - 273.15) * (9 / 5) + 32,
		},
	},
	volume: {
		m3: 1,
		liter: 0.001,
		cm3: 0.000001,
		gal: 0.00378541,
	},
	mass: {
		kg: 1,
		g: 0.001,
		mg: 0.000001,
		lb: 0.453592,
	},
	time: {
		sec: 1,
		min: 60,
		hour: 3600,
		day: 86400,
	},
	flowRate: {
		"m3/s": 1,
		"liter/s": 0.001,
		"cm3/s": 0.000001,
		"gal/min": 0.00378541 / 60,
		"kg/s": 1, // For mass flow rate
		"g/s": 0.001,
		"lb/s": 0.453592,
	},
};

export default function UnitConverter() {
	const [category, setCategory] = useState("pressure");
	const [fromUnit, setFromUnit] = useState("Pa");
	const [toUnit, setToUnit] = useState("kPa");
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");

	const handleConvert = () => {
		if (category === "temperature") {
			const kelvin = unitData.temperature[fromUnit].toK(parseFloat(input));
			const result = unitData.temperature[toUnit].fromK(kelvin);
			setOutput(result);
		} else {
			const valInBase = input * unitData[category][fromUnit];
			const result = valInBase / unitData[category][toUnit];
			setOutput(result);
		}
	};

	const unitOptions = Object.keys(unitData[category]);

	return (
		<div className="p-4 rounded-xl shadow-md max-w-sm w-md mt-10 bg-white/30 backdrop-blur-sm border border-white/30">
			<h2 className="text-xl font-bold mb-4">Unit Converter</h2>

			<label className="block mb-2">Select Category:</label>
			<select
				value={category}
				onChange={(e) => {
					setCategory(e.target.value);
					setFromUnit(Object.keys(unitData[e.target.value])[0]);
					setToUnit(Object.keys(unitData[e.target.value])[1]);
				}}
				className="mb-4 w-full p-2 border rounded"
			>
				<option value="pressure">Pressure</option>
				<option value="temperature">Temperature</option>
				<option value="volume">Volume</option>
				<option value="mass">Mass</option>
				<option value="time">Time</option>
				<option value="flowRate">Flow Rate</option>
			</select>

			<div className="flex gap-4 mb-4">
				<select
					value={fromUnit}
					onChange={(e) => setFromUnit(e.target.value)}
					className="w-1/2 p-2 border rounded"
				>
					{unitOptions.map((unit) => (
						<option key={unit}>{unit}</option>
					))}
				</select>

				<select
					value={toUnit}
					onChange={(e) => setToUnit(e.target.value)}
					className="w-1/2 p-2 border rounded"
				>
					{unitOptions.map((unit) => (
						<option key={unit}>{unit}</option>
					))}
				</select>
			</div>

            <div className="flex gap-4 mb-4">
				<input
					type="number"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					className="flex-1 p-2 border rounded"
					placeholder="Enter value"
				/>
			</div>

			<button onClick={handleConvert} className="bg-blue-600 text-white px-4 py-2 rounded">
				Convert
			</button>

			{output && (
				<p className="mt-4 font-semibold">
					Result: {output} {toUnit}
				</p>
			)}
		</div>
	);
}
