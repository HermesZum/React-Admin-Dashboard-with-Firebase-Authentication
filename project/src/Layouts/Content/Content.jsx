import "./Content.css";
import {useContext} from "react";
import {Theme} from "../../Theme.jsx";

export const Content = () => {

	const {Dark} = useContext(Theme);

	return (
		<>
			<div className={`content ${Dark && "dark"}`}>Content</div>
		</>
	)
}