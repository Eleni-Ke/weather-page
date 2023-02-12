import CurrentWeather from "./CurrentWeather";
import NextHours from "./NextHours";

const CityWeather = (props) => {
  return (
    <>
      <div className="current-weather">
        <CurrentWeather
          selectedCityFromApp={props.selectedCityFromApp}
          changeCoordinatesFromApp={props.changeCoordinatesFromApp}
        />
      </div>
      <div className="next-hours">
        <NextHours
          lon={props.selectedCityFromApp.coordinates.lon}
          lat={props.selectedCityFromApp.coordinates.lat}
          selectedCityFromApp={props.selectedCityFromApp}
        />
      </div>
    </>
  );
};

export default CityWeather;
