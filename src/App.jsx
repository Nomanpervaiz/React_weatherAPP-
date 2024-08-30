import { useState, useEffect } from "react";
import SimpleContainer from "./components/container";

function App() {
  let [weatherData, setWeatherData] = useState(null)
  let [city, setCity] = useState("karachi");
  let [search, setSearch] = useState("");

  useEffect(() => getWeatherData(), [city]);
  const getWeatherData = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9e52da91470a6a5a0172f98f5f8c3fd9&units=metric`
    )
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  };

  const findCity = () => {
    if (search) { 
      setCity(search)
    }
  }

  const temp = Math.round(weatherData?.main?.temp);
  const feel = Math.round(weatherData?.main?.feels_like);
  const hum = Math.round(weatherData?.main?.humidity);
  const pres = Math.round(weatherData?.main?.pressure);
  const visi = Math.round(weatherData?.visibility);
  const cityName = weatherData?.name;
  const iconCode = weatherData?.weather?.[0]?.icon; 
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  return (
    <>
      <SimpleContainer>
        
        {weatherData  ? ( 
          <div>
            {iconCode && (
              <img className="iconImage" src={iconUrl} alt="Weather Icon" />
            )}
            <h1 className="heading">Weather-App</h1>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="Search"
              placeholder="Search Your City"
            />
            <button onClick={findCity}>Search</button>

            <div className="detailMain">
              <div>
                <p>Temperature</p>
                <p>Feels Like</p>
                <p>Humidity</p>
                <p>Pressure</p>
                <p>Visibility</p>
                <p>City</p>
              </div>
              <div>
                <p>{temp + "°c"}</p>
                <p>{feel + "°c"}</p>
                <p>{hum + " %"}</p>
                <p>{pres + " mb"}</p>
                <p>{`${visi / 1000} km`}</p>
                <p>{cityName}</p>
              </div>
            </div>
          </div>
        ) : (
          <div>
          <p className="errorp">Weather data not available. Please search for a different city.</p> 
          </div>
        )}
      </SimpleContainer>
    </>
  );
}

export default App;
