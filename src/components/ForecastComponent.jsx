import React, { useEffect } from 'react';
import 'public/assets/css/forecast.css';
import axios from 'axios';
import { useCityDispatch, useCityState, cityActions } from '../context/cityContext';
import { getForecastDataApi } from '../urls';
import { getNext3DaysData, WEEKDAYS } from './utils';

function ForecastComponent() {
  const { city, cityForecastData, isCityForecastLoading} = useCityState();
  const dispatch = useCityDispatch();
  const { lat , lon, id: cityId = ''} = city || {};
  const { list = [], city: { id: cityForecastId = '' } = {} } = cityForecastData || {};
  const currDate = new Date();
  const nextData = getNext3DaysData(currDate, list);

  useEffect(() => {
    const fetchCityForecastData = async () => {
      try {
        dispatch(cityActions.setCityForeLoading(true));
        const { data } = await axios.get(getForecastDataApi(lat, lon));
        if(data) {
         dispatch(cityActions.setCityForeCastData(data));
      }
      } catch(err) {
        dispatch(cityActions.setCityForeCastData({}));
      } finally {
        dispatch(cityActions.setCityForeLoading(false));
      }
    };

    Object.keys(city).length > 0 && cityId !== cityForecastId && fetchCityForecastData();

  }, [city, cityForecastData]);

  return !isCityForecastLoading && (
    <div className='margin__top_md forecast__main'>
      <div className='forecast__header flex justify-content-space-between text-align-center'>
        {
          nextData.map(item => {
            return <div className='forecast__header_item margin-auto' key={item.dt} >
                { WEEKDAYS[new Date(item.dt_txt).getDay()] }
            </div>
          })
        }
      </div>
      <div className='forecast__content flex justify-content-space-between text-align-center margin__top_sm'>
        {
          nextData.map((item => {
            const { id: weatherId } = item.weather[0] || {};
            const { main: {temp_max = '', temp_min = '' } = {} } = item || {};
            return (
              <div className='margin-auto' key={item.dt}>
                <div className={`wi wi-icon-${weatherId}`}></div>
                <div className='margin__top_sm'>{temp_max}</div>
                <div className='margin__top_sm'>{temp_min}</div>
              </div>
            )
          }))
        }
      </div>
    </div>
  );

  return null;
}

export default ForecastComponent