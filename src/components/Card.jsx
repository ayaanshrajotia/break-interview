import React from "react";

//import Icons
import { ImEarth } from "react-icons/im";

// import CSS
import "../styles/Card.css";

const Card = ({ title, data, percent, date, type, color1, color2 }) => {
    return (
        <div className="card">
            <div className="card__content">
                <div className="card__content--left">
                    <span>{title}</span>
                    <h2>{data}</h2>
                </div>
                <div
                    className="card__content--right"
                    style={{
                        background: `linear-gradient(to right, ${color1}, ${color2})`,
                    }}
                >
                    <ImEarth fontSize={20} color="#ffffff" />
                </div>
            </div>
            <p>
                <span
                    className={`${
                        type === "profit" ? "percent green" : "percent red"
                    }`}
                >
                    {type === "profit" ? "+" : "-"}
                    {percent}%
                </span>{" "}
                {date}
            </p>
        </div>
    );
};

export default Card;
