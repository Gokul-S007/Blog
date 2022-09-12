import { useState, useEffect } from "react";


const useFetch = (url) => {
    const [Data,SetData] = useState(null);
    const [ispending,setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        // console.log("Use effect is fired");
        setTimeout(()=>{
            fetch(url)
            .then(res =>{
                if(!res.ok){
                    throw Error("Could not fetch the data from the server");
                    setIsPending(false);
                }
                return res.json();
            })
            .then(data => {
                // console.log(data);
                SetData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err =>{
                setError(err.message);
                setIsPending(false);
            })
        },1000);
    },[url])

    return {Data , ispending , error}
}

export default useFetch;