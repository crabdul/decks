import React from 'react';

    export default function Greeting(props) {
        name = useFormInput("Mary");
        const [surname, setSurname] = useState("Poppins");

        function handleSurnameChange(e) {
            setSurname(e.target.value);
        }

        render() {
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
    }
