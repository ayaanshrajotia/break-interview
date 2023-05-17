import React from "react";

// import Icons
import { RxHamburgerMenu } from "react-icons/rx";
import { HiUserCircle } from "react-icons/hi";
import { IoSettingsSharp } from "react-icons/io5";
import { BsFillBellFill } from "react-icons/bs";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";

// import CSS
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__section">
                <div className="navbar__left">
                    <div className="navbar__dashboard">
                        <span>
                            <AiFillHome width={30} /> / Dashboard
                        </span>
                        <br />
                        <span>
                            <b>Dashboard</b>
                        </span>
                    </div>
                    <RxHamburgerMenu fontSize={20} strokeWidth={0.6} />
                </div>
                <div className="navbar__right">
                    <div className="navbar__searchbox">
                        <AiOutlineSearch
                            color="black"
                            strokeWidth={2}
                            fontSize={20}
                        />
                        <input type="text" placeholder="Type here..." />
                    </div>
                    <div className="navbar__signin">
                        <HiUserCircle fontSize={20} />
                        Sign in
                    </div>
                    <IoSettingsSharp />
                    <BsFillBellFill />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
