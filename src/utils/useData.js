import { useState, useEffect } from "react"
import { baseURL } from "./baseURL";
import { apiKey } from "./apiKey";
import useLocation from "./useLocation";
import axios from "axios"

function useData(url) {
    const {location , locationError} = useLocation()
    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(null);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        if(location){
            setLoading(true)
        
            axios.get(`${baseURL}?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}&units=metric`)
            .then(response => {
                setData(response.data)
            })
            .catch(error => { setError(error) })
            .finally(() => { setLoading(false) })
            
        }

    },[location])

    return { data, loading, error };
}

export default useData