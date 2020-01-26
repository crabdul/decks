import React from 'react';

export default function Greeting(props) {
    const [name, setName] = useState("Mary");
    const [surname, setSurname] = useState("Poppins");

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleSurnameChange(e) {
        setSurname(e.target.value);
    }

    render() {
        return (
            <form>
                <input
                    value={name}
                    onChange={handleNameChange}
                />
                <input
                    value={surname}
                    onChange={handleSurnameChange}
                />
            </form>
        );
    }
}