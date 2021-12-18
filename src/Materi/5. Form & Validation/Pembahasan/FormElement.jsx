import React from "react";

export default class FormElement extends React.Component {
    state = {
        name: '',
        major: '',
        gender: '',
        adress: '',
        age: '',
        member: false,
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`
        name: ${this.state.name}
        major: ${this.state.major}
        gender: ${this.state.gender}
        adress: ${this.state.adress}
        age: ${this.state.age}
        member: ${this.state.member ? 'Yes':'No'}
        `);
        this.setState({
            name: '',
            major: '',
            gender: '',
            adress: '',
            age: '',
            member: false,
        }
    )
    }

    render() {
        return(
            <div style={{margin: '100px 20px', border: '2px solid dodgerblue', padding: '20px' }}>
                <form onSubmit= {this.handleSubmit}>
                    <label>
                        Name: <input
                        type="text"
                        name="name"
                        onChange={ e => this.setState({name: e.target.value})}
                        // value={this.state.name}/>
                        defaultValue={this.props.name}/>
                    </label>
                    <br />
                    <label>
                        Major: <select
                        name="major"
                        onChange={ e => this.setState({major: e.target.value})}>
                                    <option value="">Select Major</option>
                                    <option value="Teknik Informatika">Teknik Informatika</option>
                                    <option value="Sistem Informasi">Sistem Informasi</option>
                                    <option value="Cyber Security">Cyber Security</option>
                                    <option value="Desain Komunikasi Visual">Desain Komunikasi Visual</option>
                                    <option value="Internet of Things">Internet of Things</option>
                                </select>
                    </label>
                    <br />
                    <label>
                        Gender:
                        <input type="radio" value="Male" name="gender"
                        onChange={ e => this.setState({gender: e.target.value})}/>Male
                        <input type="radio" value="Female" name="gender"
                        onChange={ e => this.setState({gender: e.target.value})}/>Female
                    </label>
                    <br />
                    <label>
                        Adress: <textarea cols="21" rows="3" name="adress"
                        onChange={ e => this.setState({adress: e.target.value})}
                        // value={this.state.adress}/>
                        defaultValue={this.props.adress}/>
                    </label>
                    <br />
                    <label>
                        Age: <input name="age"
                        onChange={ e => this.setState({age: e.target.value})}/>
                    </label>
                    <br />
                    <label>
                        Member: <input type="checkbox" checked={this.state.member} name="member"
                        onChange={ e => this.setState({member: e.target.checked})}/>
                    </label>
                    <br /> <br />
                    <button type="submit" style={{backgroundColor: "dodgerblue", color: "white" , borderRadius: "4px", fontSize:"15px"}}>Submit</button>
                </form>
            </div>
        )
    }
}

