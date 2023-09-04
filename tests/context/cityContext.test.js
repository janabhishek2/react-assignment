const cities = require("public/assets/cities-fr.json");
const { cityActions, cityReducer } = require("../../src/context/cityContext");

describe('Test City Reducer', () => { 
    const initialState =  {
        city: cities[0],
        cityCurrData: {},
        cityForecastData: {},
        isCityCurrLoading: false,
        isCityForecastLoading: false,
    };

    it('Test setCity action', () => {
        const newCity = {
            "id":3038756,
            "nm":"Ablis",
            "lat":48.5172,
            "lon":1.83624
        };
        const setCityActionObject = cityActions.setCity(newCity);
        const newCityContext = cityReducer(initialState, setCityActionObject);
        const expectedContext = {
            city: { id: 3038756, nm: 'Ablis', lat: 48.5172, lon: 1.83624 },
            cityCurrData: {},
            cityForecastData: {},
            isCityCurrLoading: false,
            isCityForecastLoading: false
        };
        expect(expectedContext).toEqual(newCityContext);
    });
    it('Test cityCurrData action', () => {
        const data = {
            a: 'b'
        };
        const newCityContext = cityReducer(initialState, cityActions.setCityCurrData(data));
        const expected = {
            city: { id: 3038789, nm: 'Abbeville', lat: 50.099998, lon: 1.83333 },
            cityCurrData: { a: 'b' },
            cityForecastData: {},
            isCityCurrLoading: false,
            isCityForecastLoading: false
        };
        expect(expected).toEqual(newCityContext);
    });
    it('Test CityForeCastData action', () => {
        const data = {
            a: 'b'
        };
        const newCityContext = cityReducer(initialState, cityActions.setCityForeCastData(data));
        const expected = {
            city: { id: 3038789, nm: 'Abbeville', lat: 50.099998, lon: 1.83333 },
            cityCurrData: {},
            cityForecastData: { a: 'b' },
            isCityCurrLoading: false,
            isCityForecastLoading: false
        };
        expect(expected).toEqual(newCityContext);
    });
    it('Test CityCurrLoading action', () => {
        const loading = true;
        const newCityContext = cityReducer(initialState, cityActions.setCityCurrLoading(loading));
        const expected = {
            city: { id: 3038789, nm: 'Abbeville', lat: 50.099998, lon: 1.83333 },
            cityCurrData: {},
            cityForecastData: {},
            isCityCurrLoading: true,
            isCityForecastLoading: false
        };
        expect(expected).toEqual(newCityContext);
    });
    it('Test cityForeLoading action', () => {
        const loading = true;
        const newCityContext = cityReducer(initialState, cityActions.setCityForeLoading(loading));
        const expected = {
            city: { id: 3038789, nm: 'Abbeville', lat: 50.099998, lon: 1.83333 },
            cityCurrData: {},
            cityForecastData: {},
            isCityCurrLoading: false,
            isCityForecastLoading: true
        };
        expect(expected).toEqual(newCityContext);
    });
});