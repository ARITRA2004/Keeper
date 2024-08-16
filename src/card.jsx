import React from "react";
import './card.css'
import description from "./details";


function Card(props){
    return (
        <>
            <div className="card">
                <div className="title">
                    <h4>{props.title}</h4>
                </div>
                <div className="part"></div>
                <div className="content">
                    <p>{props.content}</p>
                </div>
            </div>
        </>
    )
}

export default Card;