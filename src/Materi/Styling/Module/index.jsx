import React from "react";
import style from "./index.module.css";

export default class Module extends React.Component {
    
    render() {
        return(
            <div>
                {/* Model biasa */}
                {/* <button className={style.btn + ' ' + style.info}>Username Triono</button> */}

                {/* Model ES6 */}
                <button className={`${style.btn} ${style.info}`}>Username Triono</button>
            </div>
        )
    }
}