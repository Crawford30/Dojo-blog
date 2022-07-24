import { useState , useEffect} from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);  
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error('Data not fetched');

            }
           return res.json();
        })
        .then((data) => {
            console.log(data);
            setData(data);
            setIsLoading(false);
            setError(null);
            

        })
        .catch((err) => {
            setIsLoading(false);
            setError(err.message);
            console.log(err.message);

        });
        console.log('use effect');
        
    }, [url]);

    return {
        data, isLoading, error
    }

}

export default useFetch;