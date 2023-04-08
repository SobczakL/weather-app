import {WiHumidity} from 'react-icons/wi'
import {FiWind} from 'react-icons/fi'
import './Main.scss';

function Main({currentTemp, tempImageRef, tempNameRef, currentHumidity, currentWind}) {

    const weatherImg = `https://openweathermap.org/img/wn/${tempImageRef}@2x.png`
    return (
        <section className="main">
            <div className='main__hero'>
                <img className='main__hero-img'
                src={weatherImg}
                alt='Weather'
                ></img>
                <h1 className='main__hero-degree'>{currentTemp}°</h1>
                <h3 className='main__hero-tempName'>{tempNameRef}</h3>
            </div>
            <div className='main__container'>
                <div className='main__container-humidity'>
                    <WiHumidity
                    className='main__container-humidity--icon'
                    />
                    <h3 className='main__container-humidity--text'>{currentHumidity}%</h3>
                    <h4 className='main__container-humidity--subtext'>Humidity</h4>
                </div>
                <div className='main__container-wind'>
                    <FiWind
                    className='main__container-wind--icon'
                    />
                    <h3 className='main__container-wind--text'>{currentWind} km/h</h3>
                    <h4 className='main__container-wind--subtext'>Wind Speed</h4>
                </div>
            </div>
        </section>
    )
}

export default Main