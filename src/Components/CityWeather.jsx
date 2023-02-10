import CurrentWeather from "./CurrentWeather";

const CityWeather = (props) => {
  return (
    <div className="current-weather">
      <CurrentWeather selectedCityFromApp={props.selectedCityFromApp} />
    </div>
  );
};

export default CityWeather;
