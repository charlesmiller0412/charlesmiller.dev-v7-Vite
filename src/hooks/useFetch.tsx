import { useEffect, useState } from "react";
const useFetch = (url: string) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    setError(true);
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
                setError(false);
            })
            .catch((err) => {
                setLoading(false);
                setError(true);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return { data, loading, error };
};

export default useFetch;
