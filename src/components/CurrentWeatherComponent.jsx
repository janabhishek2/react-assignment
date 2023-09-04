import React, { useEffect } from "react";
import "public/assets/css/currentWeather.css";
import {
  cityActions,
  useCityDispatch,
  useCityState,
} from "../context/cityContext";
import { getCurrentDataApi } from "../urls";
import axios from "axios";

function CurrentWeatherComponent() {
  const {
    city: selectedCity,
    cityCurrData,
    isCityCurrLoading,
  } = useCityState();
  const dispatch = useCityDispatch();
  const { lat, lon, id: selectedCityId } = selectedCity;
  const {
    weather = [],
    main: { temp } = {},
    id: cityDataId = "",
  } = cityCurrData || {};
  const { id = "" } = weather[0] || [];

  useEffect(() => {
    const fetchCurrentWeatherData = async () => {
      try {
        dispatch(cityActions.setCityCurrLoading(true));
        const { data } = await axios.get(getCurrentDataApi(lat, lon));
        if (data) {
          dispatch(cityActions.setCityCurrData(data));
        }
      } catch (err) {
        dispatch(cityActions.setCityCurrData({}));
      } finally {
        dispatch(cityActions.setCityCurrLoading(false));
      }
    };
    Object.keys(selectedCity).length > 0 &&
      selectedCityId !== cityDataId &&
      fetchCurrentWeatherData();
  }, [selectedCity, cityCurrData]);

  return (
    !isCityCurrLoading && (
      <div className="currentWeather__main margin__top_sm">
        <div className="currentWeather__cityName">
          {(selectedCity.nm || "").toUpperCase()}
        </div>
        <div
          className={`currentWeather__svg margin__top_sm wi wi-icon-${id}`}
        ></div>
        <div className="currentWeather__temperature margin__top_sm">{temp}</div>
      </div>
    )
  );

  return null;
}

export default CurrentWeatherComponent;
