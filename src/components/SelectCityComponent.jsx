import React, { useContext } from "react";
import { cityActions, useCityDispatch, useCityState } from "../context/cityContext";
import "public/assets/css/selectCity.css";

const cities = require("public/assets/cities-fr.json");

function SelectCityComponent() {
    const dispatch = useCityDispatch();
    const handleCityChange = (e) => {
        const { target: { value = null } = {} } = e;

        if (value) {
            const newCity = cities.find((city) => city.id == value);
           dispatch(cityActions.setCity(newCity));
        }
    };
    return (
        <div className="selectCity__main">
            <div className="selectCity__label">
                <label htmlFor="cities">Selectionner votre ville</label>
            </div>
            <div className="margin__top_xs selectCity__main">
                <select id="cities" name="cities" onChange={handleCityChange} className="selectCity__select">
                    {cities.map((city) => {
                        return (
                            <option key={city.id} value={city.id}>
                                {city.nm}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
}

export default SelectCityComponent;
