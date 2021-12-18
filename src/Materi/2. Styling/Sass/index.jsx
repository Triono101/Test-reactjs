import React from "react";
import "./index.scss";
import Title from "./Title";

export default class Sass extends React.Component {
    
    render() {
        return(
            <div>
                <Title />
                <button className="btn btn-info">Username Triono</button>
            </div>
        )
    }
}