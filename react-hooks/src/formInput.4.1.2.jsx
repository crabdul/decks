import React from 'react';

export default function UserForm() {
    const name = useFormInput("Mary");
    const surname = useFormInput("Poppins");
    return (
        <form>
            <input {...name} />
            <input {...surname} />
        </form>
    );
}
