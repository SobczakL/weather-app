import Header from '../../components/common/Header/Header';
import Main from '../../components/common/Main/Main';
import useData from '../../utils/useData';
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

    return (
        <div className='mainCard'>
            <Header 
            userLocation={data?.name}
            />
            <Main 
            currentTemp={Math.round(data?.main.temp)}
            tempImageRef={data?.weather[0].icon}
            tempNameRef={data?.weather[0].description}
            currentHumidity={Math.round(data?.main.humidity)}
            currentWind={Math.round(data?.wind.speed)}
            />
        </div>
    )
}

export default Home