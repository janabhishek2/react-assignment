import React from "react";
import SelectCityComponent from "./SelectCityComponent";
import CurrentWeatherComponent from "./CurrentWeatherComponent";
import ForecastComponent from "./ForecastComponent";
import "public/assets/css/weatherApp.css";
import { useCityState } from "../context/cityContext";
import Loader from "./Loader";
import Error from "./Error";

function WeatherApp() {
    const {
        cityCurrData,
        cityForecastData,
        isCityCurrLoading,
        isCityForecastLoading,
    } = useCityState();

    const isLoading = isCityCurrLoading || isCityForecastLoading;
    const isError =
        (!isCityCurrLoading && Object.keys(cityCurrData).length === 0) ||
        (!isCityForecastLoading && Object.keys(cityForecastData).length === 0);
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
