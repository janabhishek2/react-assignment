import React from "react";
import WeatherApp from "./components/WeatherApp";
import { CityContextProvider } from "./context/cityContext";
import 'public/assets/css/app.css';

function App() {
    return (
        <CityContextProvider>
            <WeatherApp />
        </CityContextProvider>
    );
}

export default App;
