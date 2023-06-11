import {
	XAxis,
	CartesianGrid,
	Tooltip,
	BarChart,
	Legend,
	Bar,
	YAxis
} from "recharts";

export const BChart = () => {

	const data = [
		{
			"name": "Sept",
			"Earnings": 4000,
			"Followers": 2400
		},
		{
			"name": "Oct",
			"Earnings": 3000,
			"Followers": 1398
		},
		{
			"name": "Nov",
			"Earnings": 2000,
			"Followers": 9800
		},
		{
			"name": "Dez",
			"Earnings": 2780,
			"Followers": 3908
		}
	]

	return (
		<>
			<BarChart width={250} height={210} data={data}>
				<CartesianGrid strokeDasharray="100 10" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="Followers" fill="#00464e" />
				<Bar dataKey="Earnings" fill="#810551" />
			</BarChart>
		</>
	)
}