import React, { useState } from 'react';
import Weather from './Weather';

function MainPage() {
  const [input, setInput] = useState('');
  const [data, setData] = useState({});

  const API_KEY = '754752838e0d460f46af446d5afeb733';

  const clickHandler = async (e) => {
    if (e.key === 'Enter') {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}`);
      const result = await response.json();
      // console.log(result);
      setData({
        description: result.weather[0].description,
        temp: result.main.temp,
        clouds: result.clouds.all,
        feels_like: result.main.feels_like,
        humidity: result.main.humidity,
        speed: result.wind.speed,
        pressure: result.main.pressure,
        country: result.sys.country,
        name: result.name,
        icon: result.weather[0].icon,
      });
      setInput('');
    }
  };
  return (
    <div className="search">
      <div className="inp">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={clickHandler}
          placeholder="enter city..."
          type="text"
        />
      </div>
      <div className="container">
        <Weather data={data} />
      </div>
    </div>
  );
}

export default MainPage;
