import "./Content.css";
import {useContext} from "react";
import {Theme} from "../../Theme.jsx";
import {Menu} from "../../Components/Menu/Menu.jsx";
import {Main} from "../../Components/Main/Main.jsx";

export const Content = () => {

	const {Dark} = useContext(Theme);

	return (
		<>
			<div className={`content ${Dark && "dark"}`}>
				<Menu />
				<Main />
			</div>
		</>
	)
}