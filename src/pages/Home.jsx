import React, { useState } from "react";

import "../styles/Home.css";

import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import { UserData } from "../data.js";

// import Icons
import { ImEarth } from "react-icons/im";
import { AiFillBulb } from "react-icons/ai";
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { IoArrowUpSharp } from "react-icons/io5";

import LineChart from "../components/LineChart";

const Home = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                data: UserData.map((data) => data.sales),
                borderColor: "#4FCEF8",
                borderWidth: 3,
                fill: true,
                lineTension: 0.4,
                pointRadius: 0,
                backgroundColor: createGradient(),
                height: 700,
            },
        ],
    });

    function createGradient() {
        const ctx = document.createElement("canvas").getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 250);
        gradient.addColorStop(0, "#4FCEF8");
        gradient.addColorStop(1, "rgba(75,192,192,0)");
        return gradient;
    }
    return (
        <div className="home">
            <div className="home__left">
                <Sidebar />
            </div>
            <div className="home__right">
                <Navbar />
                <div className="home__main">
                    <section className="home__main__cards">
                        <Card
                            title={"TODAY'S MONEY"}
                            data={"$53,000"}
                            type={"profit"}
                            percent={"55"}
                            date={"since yesterday"}
                            icon={"ImEarth"}
                            color1={"rgb(78, 181, 255)"}
                            color2={"rgb(0, 136, 233)"}
                        />
                        <Card
                            title={"TODAY'S USER"}
                            data={"2,300"}
                            type={"profit"}
                            percent={"3"}
                            date={"since last week"}
                            color1={"rgb(255, 54, 54)"}
                            color2={"rgb(234, 6, 6)"}
                        />
                        <Card
                            title={"NEW CLIENTS"}
                            data={"+3,462"}
                            type={"loss"}
                            percent={"2"}
                            date={"since last quarter"}
                            color1={"rgb(47, 213, 146)"}
                            color2={"rgb(5, 181, 110)"}
                        />
                        <Card
                            title={"SALES"}
                            data={"$103,430"}
                            type={"profit"}
                            percent={"5"}
                            date={"than last month"}
                            color1={"rgb(240, 166, 63)"}
                            color2={"rgb(218, 129, 3)"}
                        />
                    </section>
                    <section className="home__main__graphs">
                        <div className="home__graph">
                            <h3>Sales Overview</h3>
                            <span>
                                <IoArrowUpSharp
                                    color={"green"}
                                    fontSize={20}
                                    strokeWidth={2}
                                />
                                <b>4% more </b>
                                in 2022
                            </span>
                            <LineChart chartdata={userData} className="graph" />
                        </div>
                        <div className="home__landing-card">
                            <div className="home__landing-card--top">
                                <MdOutlineKeyboardArrowLeft fontSize={30} />
                                <MdOutlineKeyboardArrowRight fontSize={30} />
                            </div>
                            <div className="home__landing-card--bottom">
                                <div className="home__landing-card--icon">
                                    <AiFillBulb color="black" fontSize={16} />
                                </div>
                                <h5>Faster way to create web pages</h5>
                                <p>
                                    That's my skill. I'm not really specifically
                                    talented at anything except for the ability
                                    to learn.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Home;
