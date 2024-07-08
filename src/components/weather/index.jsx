import { useEffect, useState } from "react"
import Search from "../search"
export default function Weather(){
    const [search, setSearch] = useState(''); //If usercase has something
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);// why is this i dont know
    var key = '1d936e22e1c588244d4bde895e95f108'
    async function fetchWeatherData(param){
        setLoading(true);
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${key}`)
            const data = await response.json();
            console.log(data, 'data');
            if(data){
                setWeatherData(data);
            }
        }catch(e)
        {
            console.log(e);
        } finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchWeatherData("Hong Kong");
    }, []);
    
    function handleSearch(){ // async is when you have to call an API of a method
        fetchWeatherData(search)
    }
   

    function getCurrentDate(){
        return new Date().toLocaleDateString();

    }

    return (
    <div>
        <Search
        search = {search}
        setSearch = {setSearch}
        handleSearch = {handleSearch}
        />
        {
            loading ? <div>Loading...</div>: //loading ? is if loading is equal to true
            <div>
                <div className = "city-name">
                    <h2>{weatherData?.name}, <span>{weatherData?.sys?.country}</span></h2>

                </div>
                <div className = "city-date">
                    <span>{getCurrentDate()}</span>
                </div>
                <div className = "temperature">
                    <h4>{weatherData?.main?.temp}</h4>

                </div>
                <p className = "description">
                    {weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description: "" }

                </p>
                <div className = "weather-info">
                    <div>
                        <p className = "wind">{weatherData?.wind?.speed}</p>
                        <p>Wind Speed</p>
                    </div>
                    <div>
                        <p className = "humidity">{weatherData?.main?.humidity}%</p>
                        <p>humidity</p>
                    </div>

                </div>
            </div>
        }
        
    </div>
    );
}