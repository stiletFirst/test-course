import { useEffect, useState } from 'react';
import { API_KEY } from '../settings.js'

export const useWeather = (city) => {
    const [data, setData] = useState(null);
    useEffect(() => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(res => res.json())
      .then(setData)
    }, [city]);
    return data;
};