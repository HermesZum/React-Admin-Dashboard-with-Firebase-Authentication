import {useEffect, useState} from "react";
import {ThemeContext} from "./ThemeContext.jsx";

export const ThemeProvider = ({ children }) => {

	const [Dark, setDark] = useState(
		localStorage.getItem('theme') === 'dark'
	);

	useEffect(() => {
		localStorage.setItem('theme', Dark ? 'dark' : 'light');
	}, [Dark]);

	return (
		<>
			<ThemeContext.Provider value={{ Dark, setDark }}>
				{children}
			</ThemeContext.Provider>
		</>
	)
}