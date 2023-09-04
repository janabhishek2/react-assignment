import React from "react";
import SelectCityComponent from "./SelectCityComponent";
import CurrentWeatherComponent from "./CurrentWeatherComponent";
import ForecastComponent from "./ForecastComponent";
import "public/assets/css/weatherApp.css";
import { useCityState } from "../context/cityContext";
import Loader from "./Loader";

function WeatherApp() {
  const { isCityCurrLoading, isCityForecastLoading } = useCityState();

  const isLoading = isCityCurrLoading || isCityForecastLoading;
  return (
    <main className="main">
      <article>
        <SelectCityComponent />
        <div className="content">
          {isLoading ? (
            <Loader classes={"margin__top_md"} />
          ) : (
            <>
              <CurrentWeatherComponent />
              <ForecastComponent />
            </>
          )}
        </div>
      </article>
    </main>
  );
}

export default WeatherApp;
