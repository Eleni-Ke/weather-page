import { useEffect, useState } from "react";
import {
  BsSun,
  BsSunrise,
  BsSunset,
  BsArrowDown,
  BsArrowUp,
} from "react-icons/bs";

const url = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const api = "&APPID=85b360f837f56fccaef12413454ae657";

const CurrentWeather = (props) => {
  let [cityData, setCityData] = useState({});
  const fetchCityData = async () => {
    try {
      let res = await fetch(url + api + "&q=" + props.selectedCityFromApp.name);
      if (res.ok) {
        let cityDataRes = await res.json();

        setCityData(cityDataRes);
        console.log(cityDataRes);
        props.changeCoordinatesFromApp(
          cityDataRes.coord.lon,
          cityDataRes.coord.lat
        );
      } else {
        console.log("there has been an error fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCityData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div>
        {cityData.weather && (
          <img
            src={`http://openweathermap.org/img/wn/${cityData.weather[0].icon}.png`}
            alt="logo for current weather"
            className="weatherLogo"
          />
        )}
        {cityData.main && (
          <div>
            <BsArrowDown />
            {cityData.main.temp_min}°C
            <BsArrowUp />
            {cityData.main.temp_max}°C
          </div>
        )}
        {cityData.main && <h2>{cityData.main.temp}°C</h2>}
      </div>
      <div>
        <BsSunrise />
        <BsSunset />
        {cityData.sys && <div>{cityData.sys.country}</div>}
      </div>
    </>
  );
};

export default CurrentWeather;
