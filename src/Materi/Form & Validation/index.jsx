import React from "react";
import Validation from "./Pembahasan/Validation";
// import FormElement from "./Pembahasan/FormElement";

export default class Form extends React.Component {

    render() {
        return(
            <div>
                {/* <FormElement name="Triono" adress="Desa Purwo Kencono, Lampung Timur, Lampung" /> */}
                <Validation />
            </div>
        )
    }
}