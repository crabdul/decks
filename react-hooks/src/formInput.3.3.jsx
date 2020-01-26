import React from 'react';

function useFormInput (initialValue) {
    const [value, setValue] = useState(initialValue);
    function handleChange(e) {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default function Greeting(props) {
    name = useFormInput("Mary");
    const [surname, setSurname] = useState("Poppins");

    function handleSurnameChange(e) {
        setSurname(e.target.value);
    }

    return (
        <form>
            <input {...name} />
            <input
                value={surname}
                onChange={handleSurnameChange}
            />
        </form>
    );
}
