import React from 'react';

export default function Greeting(props) {
    const [name, setName] = useState("Mary");
    const [surname, setSurname] = useState("Poppins");

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
