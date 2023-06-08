import './Navigation.css';
import {Header} from "../../Components/Header/Header.jsx";
import {Nav} from "../../Components/Nav/Nav.jsx";
import {TbDashboard, TbFileUpload} from "react-icons/tb";
import {FiMessageSquare} from "react-icons/fi";
import {VscGraphLine} from "react-icons/vsc";
import {AiOutlineDollarCircle, AiOutlineUsergroupAdd, AiOutlineUserSwitch,} from "react-icons/ai";
import {MdOutlineNotificationsActive, MdSwapHoriz} from "react-icons/md";
import {RiAccountCircleLine} from "react-icons/ri";
import {BiDotsHorizontalRounded, BiMessageAltAdd} from "react-icons/bi";

export const Navigation = () => {
    return (
        <>
            <div className="navigation">
                < Header/>
                <Nav Icon={TbDashboard} title={"Dashboard"}/>
                <Nav Icon={VscGraphLine} title={"Analytics"}/>
                <Nav Icon={FiMessageSquare} title={"Messages"}/>
                <Nav Icon={AiOutlineUsergroupAdd} title={"Followers"}/>
                <Nav Icon={MdOutlineNotificationsActive} title={"Notifications"}/>
                <Nav Icon={RiAccountCircleLine} title={"Following"}/>
                <Nav Icon={AiOutlineDollarCircle} title={"Earnings"}/>
                <Nav Icon={TbFileUpload} title={"Posts"}/>
                <Nav Icon={BiMessageAltAdd} title={"Message Requests"}/>
                <Nav Icon={AiOutlineUserSwitch} title={"Change Account"}/>
                <Nav Icon={MdSwapHoriz} title={"Switch to Dark Theme"}/>
                <Nav Icon={BiDotsHorizontalRounded} title={"More details"}/>
            </div>
        </>
    )
}