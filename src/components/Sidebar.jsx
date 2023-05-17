import React from "react";

// import CSS
import "../styles/Sidebar.css";

// import Icons
import { FiMonitor } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { AiFillCreditCard } from "react-icons/ai";
import { GiCube } from "react-icons/gi";
import { ImSphere } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { SlNotebook } from "react-icons/sl";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h3>Argon Dashboard 2 PRO</h3>
            <div className="line"></div>
            <div className="sidebar__menu">
                <ul>
                    <li>
                        <FiMonitor color="purple" />
                        Dashboard
                    </li>
                    <li>
                        <SlCalender color="orange" /> Tables
                    </li>
                    <li>
                        <AiFillCreditCard color="lightgreen" /> Billing
                    </li>
                    <li>
                        <GiCube color="skyblue" /> Virtual Reality
                    </li>
                    <li>
                        <ImSphere color="red" /> RTL
                    </li>
                </ul>
            </div>
            <h4>ACCOUNT PAGES</h4>
            <div className="sidebar__menu">
                <ul>
                    <li>
                        <FaUser color="gray" />
                        Profile
                    </li>
                    <li>
                        <MdLibraryBooks color="orange" /> Sign in
                    </li>
                    <li>
                        <SlNotebook color="skyblue" /> Sign up
                    </li>
                </ul>
            </div>
            <img src="/images/folder.png" alt="" />
        </div>
    );
};

export default Sidebar;
