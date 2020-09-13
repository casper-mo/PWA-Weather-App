import React, { useState } from "react";
import { weatherApi } from "./Api/FetchWeather";
import Weather from "./Weather/Weather";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(null);

  const search = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await weatherApi(query);
        setWeather(data);
        setQuery("");
        setError(null);
      } catch (error) {
        const msgError = (
          <div className="alert-danger"> Please Enter a valid City</div>
        );
        setError(msgError);
        setQuery("");
      }
    }
  };
  return (
    <div className="main-container">
      <input
        className="search"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
        placeholder="Search by City..."
      />
      {error ? error : weather.main && <Weather weather={weather} />}
    </div>
  );
};

export default React.memo(App);
