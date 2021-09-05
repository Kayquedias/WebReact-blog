import { useState, useEffect } from "react"

function useFetch(url) {
    const [data, setData] = useState(null)
    const [isLoaded, setIsLoaded] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource.')
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsLoaded(false)
                setError(null)
            })
            .catch((err) => { // This function is invoked when any error happens
                setError(err.message)
                setIsLoaded(false)
            })
    }, [url])

    return { data, isLoaded, error }
}

export default useFetch