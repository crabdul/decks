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
    surname = useFormInput("Poppins")

    return (
        <form>
            <input {...name} />
            <input {...surname} />
        </form>
    );
}
