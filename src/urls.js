const appId = '6b8c2f7ec94d56118ca44cb06639aad0';

export const getCurrentDataApi = (lat,lon) => `https://api.openweathermap.org/data/2.5/weather?lat=${lat}4&lon=${lon}&appid=${appId}&units=metric`;
export const getForecastDataApi = (lat,lon) => `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}4&lon=${lon}&appid=${appId}&units=metric`;
