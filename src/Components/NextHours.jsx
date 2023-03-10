import { useEffect, useState } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const url =
  "https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=85b360f837f56fccaef12413454ae657";

const NextHours = (props) => {
  let [hoursData, setHoursData] = useState([]);
  const getNextHoursData = async () => {
    try {
      console.log(props.lat);
      let res = await fetch(url + "&lat=" + props.lat + "&lon=" + props.lon);
      if (res.ok) {
        let hoursDataRes = await res.json();
        console.log(hoursDataRes);
        let firstHours = hoursDataRes.list.slice(0, 6);

        setHoursData(firstHours);
      } else {
        console.log("there has been an error fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNextHoursData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.selectedCityFromApp]);
  return (
    <>
      <h3>In 3 hour steps:</h3>
      <div className="next-hours-row">
        {hoursData.length > 0 &&
          hoursData.map((nextThreeHours) => {
            const time = new Date(Date.parse(nextThreeHours.dt_txt));
            const hours = time.getHours();

            return (
              <div className="next-hours-card" key={nextThreeHours.dt}>
                <h4>{hours}:00</h4>
                <img
                  src={`http://openweathermap.org/img/wn/${nextThreeHours.weather[0].icon}.png`}
                  alt="logo for current weather"
                  className="smallWeatherLogo"
                />
                <div>
                  <BsArrowUp />
                  {nextThreeHours.main.temp_max}°C
                  <br />
                  <BsArrowDown />
                  {nextThreeHours.main.temp_min}°C
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default NextHours;
