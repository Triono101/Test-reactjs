import React from "react";

export default class List extends React.Component {
    state = {
        users: ['Triono', 'Faqoth', 'Mahardika', 'Naratama', 'Mustamiin']
    }

    render() {
        return(
            <ul>
                <div>
                    {
                        this.state.users.map((user, i) => <li key={i}>{user}</li> )
                    }
                </div>
            </ul>
        )
    }
}