import React from 'react';

export default function Greeting(props) {
    const name = useFormInput("Mary");
    const surname = useFormInput("Poppins");
    return (
        <form>
            <input {...name} />
            <input {...surname} />
        </form>
    );
}
