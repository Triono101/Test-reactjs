import React from "react";
import styled from "styled-components";
import Counter from "../Counter";

const imgProduct = "https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80";

const CardContainer = styled.div`
    box-shadow: 0 4px 8px 0 dodgerblue;
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: arial;
`;

const Image = styled.img`
    width: 100%;
`;

const Heading = styled.h1`
    font-size: 18px;
`;

const Price = styled.p`
    color: grey;
    font-size: 22px;
`;

const Description = styled.p`
    font-size: small;
`;

export default class Product extends React.Component {

    handleValue = (value) => {
        this.props.receiveValue(value)
    }

    render() {
        return(
            <div>
                <CardContainer>
                    <Image src={imgProduct} alt="img"/>
                    <Heading>Serum Air Wudhu</Heading>
                    <Price>$1.23</Price>
                    <Description>Skincare air wudhu ekstrak embun surga, menyegarkan wajah dan mencerahkan harimu</Description>
                    <Counter receiveValue={this.handleValue}/>
                </CardContainer>
            </div>
        )
    }
}