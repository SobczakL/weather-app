import axios from "axios";
import { apiKey } from "../../utils/apiKey";
import { baseURL } from "../../utils/baseURL";

export async function getWeatherData(latitude, longitude){
    try{
        const response = await axios.get(`${baseURL}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
        return response.data;
    }
    catch(error){
        console.error(error)
        return null;
    }
}