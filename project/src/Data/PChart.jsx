import {PieChart, Pie} from "recharts";

export const PChart = () => {
	const data01 = [
		{
			"name": "Sept",
			"value": 400
		},
		{
			"name": "Oct",
			"value": 300
		},
		{
			"name": "Nov",
			"value": 300
		},
		{
			"name": "Dec",
			"value": 200
		}
	];
	const data02 = [
		{
			"name": "Sept",
			"value": 2400
		},
		{
			"name": "Oct",
			"value": 4567
		},
		{
			"name": "Nov",
			"value": 1398
		},
		{
			"name": "Dec",
			"value": 9800
		}
	];

	return (
		<>
			<PieChart width={300} height={300}>
				<Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#00464e" />
				<Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={80} fill="#810551" label />
			</PieChart>
		</>
	)
}