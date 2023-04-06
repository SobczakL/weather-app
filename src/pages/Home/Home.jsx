import Header from '../../components/common/Header/Header';
import Main from '../../components/common/Main/Main';
import useData from '../../utils/useData';
import { useState, useEffect } from 'react';
import { baseURL } from '../../utils/baseURL';
import { apiKey } from '../../utils/apiKey';
import './Home.scss';

function Home() {
    const {data, loading, error} = useData()

    if(loading){
        return(
            <p>Loading...</p>
        )
    }

    if(error){

    }

    console.log(data)

    return (
        <div className='mainCard'>
            <Header 
            userLocation={data?.name}
            />
            <Main 
            currentTemp={data?.main.temp}
            tempImageRef={data?.weather[0].icon}
            currentHumidity={data?.main.humidity}
            currentWind={data?.wind.speed}
            />
        </div>
    )
}

export default Home