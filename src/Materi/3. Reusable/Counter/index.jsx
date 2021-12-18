import React from "react";
import styled from "styled-components";

const Quantity = styled.p`
    font-size: 20px;
    width: 600px;
`;

const Button = styled.button`
    border: none;
    outline: zero;
    padding: 15px;
    color: white;
    background: dodgerblue;
    text-align: center;
    cursor: pointer;
    font-size: 18px;

    &:hover {
        opacity: 0.7;
    }
`;

class Counter extends React.Component {
    state = {
        value: 0
    }

    handleMinus = () => {
        this.setState({
            value: this.state.value -1
        }, () => this.props.receiveValue(this.state.value));
    }

    handlePlus = () => {
        this.setState({
            value: this.state.value +1
        }, () => this.props.receiveValue(this.state.value));
    }

    render() {
        return(
            <div style={{display: "flex"}}>
                <Button onClick={this.handleMinus}>-</Button>
                <Quantity>{this.state.value}</Quantity>
                <Button onClick={this.handlePlus}>+</Button>
            </div>
        )
    }
}

export default Counter;