import React from "react";
import ClassComponent from "./Pembahasan/ClassComponent";
import FunctionalComponent from "./Pembahasan/FunctionComponent";

export default class Komponen extends React.Component {

    render() {
        return(
            <div>
                <ClassComponent nama="Triono"/>
                <FunctionalComponent />
            </div>
        )
    }
}