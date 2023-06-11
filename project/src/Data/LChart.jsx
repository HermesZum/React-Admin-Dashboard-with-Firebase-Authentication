import {
	XAxis,
	Tooltip,
	Legend,
	LineChart,
	YAxis,
	Line
} from "recharts";

export const LChart = () => {
	const data = [
		{
			"name": "Sept",
			"Earnings": 4000,
			"Followers": 2400,
			"amt": 2400
		},
		{
			"name": "Oct",
			"Earnings": 3000,
			"Followers": 1398,
			"amt": 2210
		},
		{
			"name": "Nov",
			"Earnings": 2000,
			"Followers": 9800,
			"amt": 2290
		},
		{
			"name": "Dec",
			"Earnings": 2780,
			"Followers": 3908,
			"amt": 2000
		}
	]
	return (
		<>
			<LineChart width={260} height={220} data={data}
					   margin={{ right: 10, top: 10 }}>

				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line type="monotone" dataKey="Followers" stroke="#00464e" />
				<Line type="monotone" dataKey="Earnings" stroke="#810551" />
			</LineChart>
		</>
	)
}