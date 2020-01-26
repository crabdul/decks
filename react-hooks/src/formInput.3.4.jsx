import React from 'react';

export default function Greeting(props) {
    name = useFormInput("Mary");
    surname = useFormInput("Poppins")

    render() {
        return (
            <form>
                <input {...name} />
                <input {...surname} />
            </form>
        );
    }
}
