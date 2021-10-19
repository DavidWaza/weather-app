const api = {
    key = "315f80ab72d6dcf8f12de6886ce3e25e",
    base = "https://api.openweathermap.org/data/2.5"
}

const [weather, setWeather] = useState({})



<div className="weather">
        <div className="main main-bottom">
            <div className="temp">
                {Math.round(weather.main.temp)} °c
            </div>
            <div className="weather-forcast">
                {weather.weather[0].main}
            </div>
        </div>
      </div>