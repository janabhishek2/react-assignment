import React, { createContext, useContext, useReducer, useState } from "react";
const cities = require("public/assets/cities-fr.json");

const CityContextState = createContext();
const CityContextDispatch = createContext();

const intitialState = {
  city: cities[0],
  cityCurrData: {},
  cityForecastData: {},
  isCityCurrLoading: false,
  isCityForecastLoading: false,
};

const SET_CITY = "set_city";
const SET_CITY_CURR_DATA = "set_city_curr_data";
const SET_CITY_FORECAST_DATA = "set_city_forecase_data";
const SET_CITY_CURR_LOADING = "set_city_curr_loading";
const SET_CITY_FORECAST_LOADING = "set_city_forecast_loading";

export const cityReducer = (state = intitialState, action) => {
  switch (action.type) {
    case SET_CITY: {
      return {
        ...state,
        city: action.payload,
      };
    }
    case SET_CITY_CURR_DATA: {
      return {
        ...state,
        cityCurrData: action.payload,
      };
    }
    case SET_CITY_FORECAST_DATA: {
      return {
        ...state,
        cityForecastData: action.payload,
      };
    }
    case SET_CITY_CURR_LOADING: {
      return {
        ...state,
        isCityCurrLoading: action.payload,
      };
    }
    case SET_CITY_FORECAST_LOADING: {
      return {
        ...state,
        isCityForecastLoading: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const cityActions = {
  setCity: (city) => ({
    type: SET_CITY,
    payload: city,
  }),
  setCityCurrData: (currData) => ({
    type: SET_CITY_CURR_DATA,
    payload: currData,
  }),
  setCityForeCastData: (foreData) => ({
    type: SET_CITY_FORECAST_DATA,
    payload: foreData,
  }),
  setCityCurrLoading: (loading) => ({
    type: SET_CITY_CURR_LOADING,
    payload: loading,
  }),
  setCityForeLoading: (loading) => ({
    type: SET_CITY_FORECAST_LOADING,
    payload: loading,
  }),
};
export function CityContextProvider({ children }) {
  const [state, dispatch] = useReducer(cityReducer, intitialState);
  return (
    <CityContextState.Provider value={state}>
      <CityContextDispatch.Provider value={dispatch}>
        {children}
      </CityContextDispatch.Provider>
    </CityContextState.Provider>
  );
}

export function useCityState() {
  return useContext(CityContextState);
}

export function useCityDispatch() {
  return useContext(CityContextDispatch);
}
