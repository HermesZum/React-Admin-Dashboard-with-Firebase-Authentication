import "./Menu.css";
import {useContext} from "react";
import {Theme} from "../../Theme.jsx";
import {BiSearch} from "react-icons/bi";
import {AiOutlineUser} from "react-icons/ai";
import {TbMessages} from "react-icons/tb";
import {IoAnalytics} from "react-icons/io5";
import {HiOutlineMoon} from "react-icons/hi";
import {RiSettingsLine} from "react-icons/ri";
import {HiOutlineLogout} from "react-icons/hi";

export const Menu = () => {

	const {Dark, setDark} = useContext(Theme);

	return (
		<>
			<header className={`menu ${Dark && "dark"}`}>
				<div className="search-bar">
					<input type="text" placeholder="Search..." />
					<BiSearch className="icon"/>
				</div>
				<div className="tools">
					<AiOutlineUser className="icon"/>
					<TbMessages className="icon"/>
					<IoAnalytics className="icon"/>

					<div className="divider"></div>

					<HiOutlineMoon className="icon" onClick={() => setDark(!Dark)}/>
					<RiSettingsLine className="icon"/>
					<HiOutlineLogout className="icon"/>

					<div className="divider"></div>

					<div className="user">
						<img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="profile-img" alt="user-img"/>
					</div>
				</div>
			</header>
		</>
	)
}