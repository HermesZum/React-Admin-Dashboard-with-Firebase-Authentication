import "./Content.css";
import {useContext} from "react";
import {ThemeContext} from "../../ThemeContext.jsx";
import {Menu} from "../../Components/Menu/Menu.jsx";
import {Main} from "../../Components/Main/Main.jsx";

export const Content = () => {

	const {Dark} = useContext(ThemeContext);

	return (
		<>
			<div className={`content ${Dark && "dark"}`}>
				<Menu />
				<Main />
			</div>
		</>
	)
}