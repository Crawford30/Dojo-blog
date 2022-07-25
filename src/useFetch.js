import { useState , useEffect} from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);  
    const [error, setError] = useState(null);

    useEffect(() => {
        //Abort Controller
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
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
                if(err.name == 'AbortError'){
                    console.log('Fetch Aborted');
                }else {
                    setIsLoading(false);
                    setError(err.message);
                    console.log(err.message);
                }
               
    
            }, 8000);
            //Clean up function

            return () => abortCont.abort();
            //console.log('Clea Up');
        });
       
        console.log('use effect');
        
    }, [url]);

    return {
        data, isLoading, error
    }

}

export default useFetch;