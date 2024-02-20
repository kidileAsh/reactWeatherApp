import React, { useState, useEffect } from "react";
import "./style.css";
const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e8fc152d6b8451a7d1c5e25072d5045c`;
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div id="background-wrap">
        <div class="x1">
          <div class="cloud"></div>
        </div>

        <div class="x2">
          <div class="cloud"></div>
        </div>

        <div class="x3">
          <div class="cloud"></div>
        </div>

        <div class="x4">
          <div class="cloud"></div>
        </div>

        <div class="x5">
          <div class="cloud"></div>
        </div>
      </div>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="errormsg">No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h1 className="location">
              <i class="fas fa-map-marker-alt"></i>
                {search}
              </h1>
              <h2 className="temp">{city.temp}&#176;Cel</h2>
              <h3 className="tempmin_max">
                Min: {city.temp_min}&#176;Cel | Max: {city.temp_max}&#176;Cel
              </h3>
            </div>
            <div class="ocean">
              <div class="wave"></div>
              <div class="wave"></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
