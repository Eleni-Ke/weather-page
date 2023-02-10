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
        cityData = await res.json();
        console.log(cityData);
        setCityData(cityData);
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
        {/* <img
          src={`http://openweathermap.org/img/wn/${cityData.weather[0].icon}.png`}
          alt=""
        />
        <div>
          <BsArrowDown />
          {cityData.main.temp_min}°C
          <BsArrowUp />
          {cityData.main.temp_max}°C
        </div>
        <h2>{cityData.main.temp}°C</h2> */}
      </div>
      <div>
        <BsSunrise />
        <BsSunset />
      </div>
    </>
  );
};

export default CurrentWeather;
