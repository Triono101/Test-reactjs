import React from "react";
import styled from "styled-components";

const Button = styled.button `
    border: 2px solid black;
    background-color: white;
    color: black;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;

    border-color: rgb(255, 145, 0);
    color: rgb(255, 60, 0);
    border-radius: 5px;

    &:hover {
        background: rgb(255, 145, 0);
        color: white;
    }
`;

export default class Styled extends React.Component {

    render() {
        return(
            <div>
                <Button>Username Triono</Button>
            </div>
        )
    }
}