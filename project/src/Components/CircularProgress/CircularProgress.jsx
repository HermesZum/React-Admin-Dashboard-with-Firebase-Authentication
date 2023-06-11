import "./CircularProgress.css";

export const CircularProgress = ({value, offset, color}) => {
	return (
		<>
			<div className="circular-progress">
				<div className="details">
					<h1>{value}</h1>
					<p>%</p>
				</div>
				<svg>
					<circle cx="55" cy="55" r="50" className="svg-circle-gray" />
					<circle cx="55" cy="55" r="50" className="svg-circle" style={{"--clr": color, "--p": offset}} />
				</svg>
			</div>
		</>
	)
}