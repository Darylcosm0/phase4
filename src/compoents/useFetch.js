import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoaging, setIsLoaging] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not connect');
                    }
                 return res.json();
        })
                .then(data => {
                    setData(data);
                    setIsLoaging(false);
                    setError(null);
        })
        .catch(err => {
            setIsLoaging(false);
            setError(err.message);
        })
    }, 1000);
    }, [url]);

    return{ data, isLoaging, error }
}
 
export default useFetch;