import './Header.css';
import {useEffect, useState} from "react";
export const Header = () => {

	const [username, setUsername] = useState("");

	useEffect(() => {
		setUsername(localStorage.getItem("username"));
	}, []);

	return (
		<>
			<header>
				<div className="profile">
					<img
						src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
						alt="user-img"
						className="profile-img"
					/>
				</div>
				<span>{username}</span>
			</header>
		</>
	)
}