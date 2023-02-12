import CurrentWeather from "./CurrentWeather";
import NextHours from "./NextHours";

const CityWeather = (props) => {
  return (
    <>
      <div className="current-weather">
        <CurrentWeather selectedCityFromApp={props.selectedCityFromApp} />
      </div>
      <div className="next-hours">
        <NextHours lon="3.76" lat="8.34" />
      </div>
    </>
  );
};

export default CityWeather;
