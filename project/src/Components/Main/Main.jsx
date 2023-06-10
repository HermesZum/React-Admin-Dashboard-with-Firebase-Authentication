import "./Main.css";
import {useContext} from "react";
import {Theme} from "../../Theme.jsx";
import {FiSettings} from "react-icons/fi";
import {RiChat1Line} from "react-icons/ri";
import {AiOutlineUsergroupAdd} from "react-icons/ai";
import {RiChat3Line} from "react-icons/ri";
import {AiOutlineLike} from "react-icons/ai";
import {IoCashOutline} from "react-icons/io5";
import {Card} from "../Card/Card.jsx";

export const Main = () => {

	const {Dark} = useContext(Theme);

	return (
		<>
			<div className={`main ${Dark && "dark"}`}>
				<div className="row header">
					<FiSettings className="cog" />
					<h1 className="txt-head">Current Notifications</h1>
					<div className="divider"></div>
					<div className="notifications">
						<RiChat1Line />
						<RiChat1Line />
						<RiChat1Line />
						<RiChat1Line />
					</div>
					<svg
						className="bg-waves-1"
						preserveAspectRatio="none"
						viewBox="0 0 1200 120"
						xmlns="http://www.w3.org/2000/svg"
						style={{
							fill: "#ffffff",
							width: "133%",
							height: 50
						}}
					>
						<path
							d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
							opacity=".25"
						/>
						<path
							d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
							opacity=".5"
						/>
						<path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
					</svg>
				</div>
				<div className="row header">
					<Card Icon={AiOutlineUsergroupAdd} title="Followers" value="None ;) "/>
					<Card Icon={RiChat3Line} title="Messages" value="+ 0"/>
					<Card Icon={AiOutlineLike} title="Likes" value="+ 0"/>
					<Card Icon={IoCashOutline} title="Earnings" value="$0.0"/>
					<svg
						className="bg-waves-2"
						preserveAspectRatio="none"
						viewBox="0 0 1200 120"
						xmlns="http://www.w3.org/2000/svg"
						style={{
							fill: "#ffffff",
							width: "133%",
							height: 50,
							transform: "rotate(180deg) scaleX(-1)"
						}}
					>
						<path
							d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
							opacity=".25"
						/>
						<path
							d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
							opacity=".5"
						/>
						<path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
					</svg>
				</div>
			</div>
		</>
	)
}