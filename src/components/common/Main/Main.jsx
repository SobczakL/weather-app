import './Main.scss';

function Main({currentTemp, tempImageRef, currentHumidity, currentWind}) {

    const weatherIcon = `https://openweathermap.org/img/wn/${tempImageRef}@2x.png`
    return (
        <div className="main">
            <div className='main__hero'>
                <img className='main__hero-img'
                src={weatherIcon}
                alt='Weather'
                ></img>
                <h1 className='main__hero-degree'>{currentTemp}</h1>
            </div>
            <div className='main__subContainer'>
                <h3>{currentHumidity}</h3>
                <h3>{currentWind}</h3>
            </div>
        </div>
    )
}

export default Main