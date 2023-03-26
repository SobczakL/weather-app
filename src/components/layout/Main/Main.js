import axios from "axios"
import { useState, useEffect } from 'react';
import { apiKey } from '../../../services/apiKey';
import instance from '../../../services/instance';

function Main() {

    const [forecastData, setForecastData] = useState([])

    const lon = (-79.38)
    const lat = 43.65
    

    useEffect(() => {
        async function fetchData(){
            const request = await instance.get(`/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
            setForecastData(request.data)
        }
        fetchData()
    }, []);

    console.log(forecastData)


    return (
        <section className="main">

        </section>
    )
}

export default Main