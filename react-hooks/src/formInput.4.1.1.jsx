import React from 'react';

export default class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Mary",
            surname: "Poppins",
        };
        this.handleNameChange = this.handleNameChange.bind(
            this
        );
        this.handleSurnameChange = this.handleSurnameChange.bind(
            this
        );
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleSurnameChange(e) {
        this.setState({ surname: e.target.value });
    }

    render() {
        return (
            <form>
                <input
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />
                <input
                    value={this.state.surname}
                    onChange={this.handleSurnameChange}
                />
            </form>
        );
    }
}
