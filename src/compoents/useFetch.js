import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoaging, setIsLoaging] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
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
            if (err.name === 'AbortError') {
                console.log('fetch aborted')
            } else {
            setIsLoaging(false);
            setError(err.message);
            }
        })
    }, 1000);

    return () => abortCont.abort();
    }, [url]);

    return{ data, isLoaging, error }
}
 
export default useFetch;