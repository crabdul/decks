import React, { useState } from "react";

function useFetch() {
    [data, setData] = useState(null)
    [error, setError] = useState(null)
    [isLoading, setIsLoading] = useState(false);

    const fetchData = url => {
        setIsLoading(true)
        fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "GET",
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json();
            })
            .then(data => {
                setData(data)
                setIsLoading(false)
            })
            .catch(error => {
                setError(error)
                setIsLoading(false)
            });
    }

    return [{ data, error, isLoading }, fetchData];
}

export default function A(props) {
    [{ data, error, isLoading }, fetchData] = useFetch();
    usernameInput = useFormInput("");

    if (isLoading) {
        return <p>Loading</p>;
    }
    return (
        <div>
            <form onSubmit={fetchData(`https://api.github.com/users/${usernameInput.value}/repos`)}>
                <input {...usernameInput} />
            </form>
            {data && (
                <ul>
                    {data.map(repo => <li>repo.name</li>)}
                </ul>
            )}
            {error && <p>{error}</p>}
        </div>
    );
}
