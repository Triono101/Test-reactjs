import React from "react";

// Membuat properti default
import PropTypes from "prop-types";

class ClassComponent extends React.Component {
// 1.Kode awal
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         value: 0
    //     }
    // this.handlePlus = this.handlePlus.bind(this);
    // this.handleMinus = this.handleMinus.bind(this);
    // }

// 2. Kode refactoring

    state = {
        value: 0
    }

// Pengganti melakukan binding
    // handlePlus = () => {}
    // handleMinus = () => {}

    handlePlus = () => {
        this.setState({value: this.state.value + 1});
    }
    handleMinus = () => {
        if(this.state.value > 0) {
            this.setState({value: this.state.value - 1});
        }
    }

    render() {
        return(
            <div>
                <h1>Komponen ini dibuat dengan class component</h1>
                <h2>Hello {this.props.nama}</h2>
                <button onClick={this.handleMinus}>-</button>
                <span>{''} {this.state.value} {''}</span>
                <button onClick={this.handlePlus}>+</button>
            </div>
        )
    }
}

// Membuat properti default
ClassComponent.propTypes = {
    nama: PropTypes.string.isRequired
}

export default ClassComponent;