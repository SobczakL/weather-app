import Header from "../Header/Header";
import { getLocation } from '../../../utils/getLocation';
import { getWeatherData } from '../../../services/api/getWeatherData';
import { useState, useEffect } from 'react';

function Main() {
    const [weatherData, setWeatherData] = useState(null)
    const [cityName, setCityName] = useState(null);

    useEffect(() => {
        async function fetchWeatherData(){
            try{
                const {latitude, longitude} = await getLocation()
                const weather = await getWeatherData(latitude, longitude);

                setWeatherData(weather)
                setCityName(weather.name)
            }
            catch (error){
                console.error(error)
            }
        }
        fetchWeatherData()
    },[])

    return (
        <div>
            <Header 
            location={cityName}
            />
        </div>
    )
}

export default Main